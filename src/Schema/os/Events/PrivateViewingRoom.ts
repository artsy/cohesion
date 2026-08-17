import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "."

/**
 * Schemas describing Art OS Private Viewing Room events
 *
 * A Private Viewing Room is a password-protected web page a gallery generates
 * from a collection and shares with a client by link. It is a `PartnerList`
 * with `listType: "PRIVATE_VIEWING_ROOM"`, so the generic list events
 * (`createdList`, `addedArtworksToList`, …) also fire for it — these schemas
 * cover only what is specific to sharing a room.
 *
 * Note the `privateViewingRoom` prefix throughout: `OwnerType.viewingRoom` and
 * `ContextModule.viewingRoom` already exist for the consumer-facing viewing
 * rooms on artsy.net, and both feed the same `context_page_owner_type` /
 * `context_module` columns. Reusing the bare name would merge two unrelated
 * products downstream.
 *
 * @packageDocumentation
 */

/**
 * A partner opens the Private Viewing Room editor, either to share a room for
 * the first time or to update one already shared.
 *
 * `trigger` separates the three entry points: the Share button on an unshared
 * room, the Manage panel on a shared one, and the banner shown when a shared
 * room's artworks have drifted from the snapshot viewers currently see. Pairing
 * the banner trigger with its `bannerViewed` impression is the only way to tell
 * whether that nudge gets acted on.
 *
 * Fires on open, not on the first edit, so it is the denominator for
 * share-completion rate when paired with {@link SharedPrivateViewingRoom}.
 *
 * This schema describes events sent to Segment from
 * [[ClickedSharePrivateViewingRoom]]
 *
 * @example
 * ```
 * {
 *   action: "clickedSharePrivateViewingRoom",
 *   context_module: "listDetail",
 *   context_page_owner_type: "privateViewingRoom",
 *   list_id: "5d2b5b5d5e5b5d000e1b5b5d",
 *   value: "share",
 *   trigger: "shareButton"
 * }
 * ```
 */
export interface ClickedSharePrivateViewingRoom {
  action: OsActionType.clickedSharePrivateViewingRoom
  context_module: OsContextModule.listDetail
  context_page_owner_type: OsOwnerType.privateViewingRoom
  list_id: string
  value: "share" | "update"
  trigger: "shareButton" | "manageMenu" | "updateBanner"
}

/**
 * A partner successfully shares a Private Viewing Room — past this point the
 * link works and the client can open the room. Fires from the publish
 * mutation's success callback, so it means the room is live rather than that
 * the gallery intended to share it.
 *
 * `value` distinguishes a first share from an update to an already-shared room.
 * Every share goes through the editor: the stale-room banner opens the editor
 * rather than republishing in one click, so the gallery always reviews the
 * preview before viewers see a change.
 *
 * `has_passcode` is a boolean by design. The passcode itself is a shared access
 * credential and is never sent.
 *
 * `content` is a generic catch-all holding the header choices and the artwork
 * detail fields the gallery chose to expose — field names only, never their
 * values. Kept generic on purpose, matching {@link OsCreatedStudioContent}, so
 * it is parsed ad-hoc downstream rather than maintained as a rigid set of
 * top-level fields.
 *
 * This schema describes events sent to Segment from
 * [[SharedPrivateViewingRoom]]
 *
 * @example
 * ```
 * {
 *   action: "sharedPrivateViewingRoom",
 *   context_module: "privateViewingRoomEditor",
 *   context_page_owner_type: "privateViewingRoom",
 *   value: "shared",
 *   list_id: "5d2b5b5d5e5b5d000e1b5b5d",
 *   artwork_count: 12,
 *   has_passcode: true,
 *   brand_kit: true,
 *   content: {
 *     showGalleryName: true,
 *     hasHeading: true,
 *     hasDescription: false,
 *     artworkFields: ["artistName", "artworkTitle", "year", "medium"]
 *   }
 * }
 * ```
 */
export interface SharedPrivateViewingRoom {
  action: OsActionType.sharedPrivateViewingRoom
  context_module: OsContextModule.privateViewingRoomEditor
  context_page_owner_type: OsOwnerType.privateViewingRoom
  value: "shared" | "updated"
  list_id: string
  artwork_count: number
  /** Whether a passcode is set. The passcode itself is never sent */
  has_passcode: boolean
  brand_kit: boolean
  /** Generic catch-all for the header choices and exposed artwork detail fields */
  content: Record<string, unknown>
}

/**
 * A partner stops sharing a Private Viewing Room, which immediately breaks the
 * link the client was given. `trigger` distinguishes the Manage panel on the
 * collection page from the editor's own footer.
 *
 * This schema describes events sent to Segment from
 * [[StoppedSharingPrivateViewingRoom]]
 *
 * @example
 * ```
 * {
 *   action: "stoppedSharingPrivateViewingRoom",
 *   context_module: "listDetail",
 *   context_page_owner_type: "privateViewingRoom",
 *   list_id: "5d2b5b5d5e5b5d000e1b5b5d",
 *   trigger: "manageMenu"
 * }
 * ```
 */
export interface StoppedSharingPrivateViewingRoom {
  action: OsActionType.stoppedSharingPrivateViewingRoom
  context_module: OsContextModule.listDetail
  context_page_owner_type: OsOwnerType.privateViewingRoom
  list_id: string
  trigger: "manageMenu" | "editor"
}

export type OsPrivateViewingRoom =
  | ClickedSharePrivateViewingRoom
  | SharedPrivateViewingRoom
  | StoppedSharingPrivateViewingRoom
