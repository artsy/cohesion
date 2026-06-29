import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "."

/**
 * Schemas describing Art OS Inventory Table events
 * @packageDocumentation
 */

/**
 * A partner clicks a row to expand or collapse the Artsy CMS sub-row.
 * Import rows and Inventory-Only rows (artsyListing === false) are not expandable.
 *
 * This schema describes events sent to Segment from [[OsClickedArtworkRow]]
 *
 * @example
 * ```
 * {
 *   action: "clickedArtworkRow",
 *   context_module: "artworkTable",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123"
 * }
 * ```
 */
export interface OsClickedArtworkRow {
  action: OsActionType.clickedArtworkRow
  context_module: OsContextModule.artworkTable
  context_page_owner_type: OsOwnerType
  artwork_id: string
}

/**
 * A partner clicks an edition set row to expand or collapse its details sub-row.
 *
 * This schema describes events sent to Segment from [[OsClickedEditionSetRow]]
 *
 * @example
 * ```
 * {
 *   action: "clickedEditionSetRow",
 *   context_module: "artworkTable",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123",
 *   edition_set_id: "xyz789"
 * }
 * ```
 */
export interface OsClickedEditionSetRow {
  action: OsActionType.clickedEditionSetRow
  context_module: OsContextModule.artworkTable
  context_page_owner_type: OsOwnerType
  artwork_id: string
  edition_set_id: string
}

/**
 * A partner edits a field inline in the inventory table.
 * Fires on mutation success (not on the toast render).
 * All field edits share this single event; use `field` to distinguish them.
 *
 * This schema describes events sent to Segment from [[OsEditedArtworkField]]
 *
 * @example
 * ```
 * {
 *   action: "editedArtworkField",
 *   context_module: "artworkTable",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123",
 *   field: "title",
 *   old_value: "Untitled",
 *   new_value: "Blue"
 * }
 * ```
 *
 * @example Medium with free-text flag
 * ```
 * {
 *   action: "editedArtworkField",
 *   context_module: "artworkTable",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123",
 *   field: "medium",
 *   old_value: "Oil on canvas",
 *   new_value: "Watercolor",
 *   is_free_text: true
 * }
 * ```
 *
 * @example Artist autocomplete match
 * ```
 * {
 *   action: "editedArtworkField",
 *   context_module: "artworkTable",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123",
 *   field: "artist",
 *   value: "matched",
 *   matched_id: "artist-internal-id"
 * }
 * ```
 */
export interface OsEditedArtworkField {
  action: OsActionType.editedArtworkField
  context_module: OsContextModule.artworkTable
  context_page_owner_type: OsOwnerType
  artwork_id: string
  /** Present only for edition-set variant rows in the Artsy CMS sub-row */
  edition_set_id?: string
  field:
    | "artist"
    | "availability"
    | "certificateOfAuthenticity"
    | "dimensions"
    | "location"
    | "medium"
    | "price"
    | "priceCurrency"
    | "privateNotes"
    | "title"
    | "year"
  /** Omit for privateNotes (free text — don't log contents) */
  old_value?: string
  /** Omit for privateNotes (free text — don't log contents) */
  new_value?: string
  /** Medium only: true = free text entered, false = predefined mediumType selected */
  is_free_text?: boolean
  /** Artist and location only: the action taken on the autocomplete */
  value?: "add" | "matched" | "removed"
  /** Artist and location only: the resolved Artsy entity ID */
  matched_id?: string
}

/**
 * A partner successfully adds a new location via the Add Location modal (2-step flow).
 * Fires on useCreatePartnerLocation mutation success.
 *
 * This schema describes events sent to Segment from [[OsAddedLocation]]
 *
 * @example
 * ```
 * {
 *   action: "addedLocation",
 *   context_module: "addLocationModal",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123",
 *   location_id: "loc456"
 * }
 * ```
 */
export interface OsAddedLocation {
  action: OsActionType.addedLocation
  context_module: OsContextModule.addLocationModal
  context_page_owner_type: OsOwnerType
  artwork_id: string
  location_id: string
}

/**
 * A partner successfully adds a new artist via the Add Artist modal.
 * Fires on mutation success.
 *
 * This schema describes events sent to Segment from [[OsAddedArtist]]
 *
 * @example
 * ```
 * {
 *   action: "addedArtist",
 *   context_module: "addArtistModal",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123",
 *   artist_id: "artist789"
 * }
 * ```
 */
export interface OsAddedArtist {
  action: OsActionType.addedArtist
  context_module: OsContextModule.addArtistModal
  context_page_owner_type: OsOwnerType
  artwork_id: string
  artist_id: string
}

/**
 * A partner clicks the image cell to open the Images modal.
 *
 * This schema describes events sent to Segment from [[OsClickedImagesModal]]
 *
 * @example
 * ```
 * {
 *   action: "clickedImagesModal",
 *   context_module: "imagesModal",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123"
 * }
 * ```
 */
export interface OsClickedImagesModal {
  action: OsActionType.clickedImagesModal
  context_module: OsContextModule.imagesModal
  context_page_owner_type: OsOwnerType
  artwork_id: string
}

/**
 * A partner saves changes in the Images modal (reorders, removals, and/or new uploads).
 * Fires on save/confirm mutation success ("Images saved successfully").
 *
 * This schema describes events sent to Segment from [[OsSavedArtworkImages]]
 *
 * @example
 * ```
 * {
 *   action: "savedArtworkImages",
 *   context_module: "imagesModal",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123",
 *   added_count: 2,
 *   removed_count: 1,
 *   reordered: true
 * }
 * ```
 */
export interface OsSavedArtworkImages {
  action: OsActionType.savedArtworkImages
  context_module: OsContextModule.imagesModal
  context_page_owner_type: OsOwnerType
  artwork_id: string
  added_count: number
  removed_count: number
  reordered: boolean
}

/**
 * A partner uploads a document via the Documents modal.
 * Fires on useCreateCatalogArtworkDocument mutation success ("Document uploaded").
 *
 * This schema describes events sent to Segment from [[OsAddedArtworkDocument]]
 *
 * @example
 * ```
 * {
 *   action: "addedArtworkDocument",
 *   context_module: "documentsModal",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123",
 *   document_count: 3
 * }
 * ```
 */
export interface OsAddedArtworkDocument {
  action: OsActionType.addedArtworkDocument
  context_module: OsContextModule.documentsModal
  context_page_owner_type: OsOwnerType
  artwork_id: string
  /** Document count after the upload */
  document_count: number
  /** File metadata if accessible: type (e.g. "pdf") and size (e.g. "1MB") */
  value?: { type: string; size: string }
}

/**
 * A partner deletes a document via the Documents modal (after confirmation).
 * Fires on useDeleteCatalogArtworkDocument mutation success ("Document deleted").
 *
 * This schema describes events sent to Segment from [[OsRemovedArtworkDocument]]
 *
 * @example
 * ```
 * {
 *   action: "removedArtworkDocument",
 *   context_module: "documentsModal",
 *   context_page_owner_type: "inventory",
 *   artwork_id: "abc123",
 *   document_count: 2
 * }
 * ```
 */
export interface OsRemovedArtworkDocument {
  action: OsActionType.removedArtworkDocument
  context_module: OsContextModule.documentsModal
  context_page_owner_type: OsOwnerType
  artwork_id: string
  /** Document count after the deletion */
  document_count: number
}

/**
 * A partner selects an item from any inventory actions dropdown.
 * Covers the three top-bar dropdowns ("Add to", "Open in Studio", "More") and the
 * per-row / right-click menus. `label` identifies which specific button or trigger
 * the partner used; `value` is the action item they selected within it.
 *
 * This schema describes events sent to Segment from [[OsClickedActionsDropdown]]
 *
 * @example Top-bar "Add to" dropdown
 * ```
 * {
 *   action: "clickedActionsDropdown",
 *   context_module: "actionsDropdown",
 *   context_page_owner_type: "inventory",
 *   value: "Add to Artsy",
 *   label: "add to dropdown",
 *   artwork_ids: ["abc123", "def456"]
 * }
 * ```
 *
 * @example Right-click context menu
 * ```
 * {
 *   action: "clickedActionsDropdown",
 *   context_module: "actionsDropdown",
 *   context_page_owner_type: "inventory",
 *   value: "Convert to Edition Set",
 *   label: "context menu",
 *   artwork_ids: ["abc123"]
 * }
 * ```
 */
export interface OsClickedActionsDropdown {
  action: OsActionType.clickedActionsDropdown
  context_module: OsContextModule.actionsDropdown
  context_page_owner_type: OsOwnerType
  /**
   * The specific action item selected within the dropdown.
   * Top-bar "Add to": "Add to Artsy" | "Add to Collection"
   * Top-bar "Open in Studio": "Tearsheet" | "Checklist" | "Instagram Post" | "Mailchimp Campaign"
   * Top-bar "More": "Delete"
   * Row/context menu only: "Remove from Artsy" | "Change Collection" | "Remove from Collection" |
   *   "Convert to Edition Set" | "Edit Edition Set" | "Convert to Unique"
   * Distribution: "Distribute to Artsy"
   */
  value:
    | "Add to Artsy"
    | "Add to Collection"
    | "Change Collection"
    | "Checklist"
    | "Convert to Edition Set"
    | "Convert to Unique"
    | "Delete"
    | "Distribute to Artsy"
    | "Edit Edition Set"
    | "Instagram Post"
    | "Mailchimp Campaign"
    | "Remove from Artsy"
    | "Remove from Collection"
    | "Tearsheet"
  /** Which button or trigger the partner used to open this dropdown */
  label:
    | "add to dropdown"
    | "context menu"
    | "more dropdown"
    | "row action"
    | "studio dropdown"
  artwork_ids: string[]
}

/**
 * A partner edits an availability, medium, or price cell that is configured to sync
 * with a downstream destination (e.g. Artsy CMS). Fires on mutation success. Distinct
 * from {@link OsEditedArtworkField} (general field edits) — this captures only the three
 * syncable fields and whether a push to the destination actually occurred.
 *
 * @example
 * ```
 * {
 *   action: "editedInventoryField",
 *   context_module: "artworkTable",
 *   context_page_owner_type: "inventory",
 *   destination: ["artsy"],
 *   artwork_id: "abc123",
 *   field: "availability",
 *   did_push_to_cms: false
 * }
 * ```
 */
export interface EditedInventoryField {
  action: OsActionType.editedInventoryField
  context_module: OsContextModule.artworkTable
  context_page_owner_type: OsOwnerType
  /** Downstream destinations the value was pushed to (e.g. ["artsy"]) */
  destination: string[]
  artwork_id: string
  field: "availability" | "medium" | "price"
  /** false e.g. for "Not For Sale" (OS-only value that does not push to the destination) */
  did_push_to_cms: boolean
}

export type OsInventoryTable =
  | EditedInventoryField
  | OsAddedArtist
  | OsAddedArtworkDocument
  | OsAddedLocation
  | OsClickedActionsDropdown
  | OsClickedArtworkRow
  | OsClickedEditionSetRow
  | OsClickedImagesModal
  | OsEditedArtworkField
  | OsRemovedArtworkDocument
  | OsSavedArtworkImages
