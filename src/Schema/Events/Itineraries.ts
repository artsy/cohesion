import { OwnerType, ScreenOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing City Guide itinerary events
 * @packageDocumentation
 */

/**
 * When a user adds a stop (a show, fair, or custom stop) to one or more of their own
 * itineraries by pressing Done in the Add to Itinerary sheet
 *
 * This schema describes events sent to Segment from [[addedStopToItinerary]]
 *
 *  @example
 *  ```
 *  {
 *    action: "addedStopToItinerary",
 *    context_owner_id: "5f2c930b1ee0d500043b47dd",
 *    context_owner_slug: "andy-warhol-flowers",
 *    context_owner_type: "show",
 *    owner_ids: ["b0b1c2d3-e4f5-4a6b-8c9d-0e1f2a3b4c5d"]
 *  }
 * ```
 */
export interface AddedStopToItinerary {
  action: ActionType.addedStopToItinerary
  context_owner_id?: string
  context_owner_slug?: string
  context_owner_type: OwnerType
  /** The itinerary (or itineraries, adding a curated guide's full list) the stop landed on. */
  owner_ids: string[]
}

/**
 * When a user removes a stop from one or more of their own itineraries by unticking them and
 * pressing Done in the Add to Itinerary sheet
 *
 * This schema describes events sent to Segment from [[removedStopFromItinerary]]
 *
 *  @example
 *  ```
 *  {
 *    action: "removedStopFromItinerary",
 *    context_owner_id: "5f2c930b1ee0d500043b47dd",
 *    context_owner_slug: "andy-warhol-flowers",
 *    context_owner_type: "show",
 *    owner_ids: ["b0b1c2d3-e4f5-4a6b-8c9d-0e1f2a3b4c5d"]
 *  }
 * ```
 */
export interface RemovedStopFromItinerary {
  action: ActionType.removedStopFromItinerary
  context_owner_id?: string
  context_owner_slug?: string
  context_owner_type: OwnerType
  /** The itineraries the stop was removed from. */
  owner_ids: string[]
}

/**
 * How an Add to Itinerary sheet ended. `added`, `removed` and `addedAndRemoved` come from
 * Done changing memberships; `noChange` is Done with nothing to change; `dismissed` is the
 * sheet closed without Done.
 */
export type AddToItineraryOutcome =
  | "added"
  | "removed"
  | "addedAndRemoved"
  | "noChange"
  | "dismissed"

/**
 * When the Add to Itinerary sheet closes, in City Guide. Sent once per sheet, so every
 * [[tappedAddToItinerary]] has exactly one matching close.
 *
 * This schema describes events sent to Segment from [[closedAddToItinerary]]
 *
 *  @example
 *  ```
 *  {
 *    action: "closedAddToItinerary",
 *    context_owner_id: "5f2c930b1ee0d500043b47dd",
 *    context_owner_slug: "andy-warhol-flowers",
 *    context_owner_type: "show",
 *    context_screen_owner_id: "b0b1c2d3-e4f5-4a6b-8c9d-0e1f2a3b4c5d",
 *    context_screen_owner_slug: "chill-vibes-only",
 *    context_screen_owner_type: "cityGuideGuide",
 *    had_error: false,
 *    outcome: "added"
 *  }
 * ```
 */
export interface ClosedAddToItinerary {
  action: ActionType.closedAddToItinerary
  /** The stop's entity (a show, fair or location), or `cityGuideCustomStop`. */
  context_owner_id?: string
  context_owner_slug?: string
  context_owner_type: OwnerType
  /** The screen the sheet was opened from. */
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  context_screen_owner_type: ScreenOwnerType
  /** Whether a Done attempt failed before the sheet closed. */
  had_error: boolean
  outcome: AddToItineraryOutcome
}

/**
 * How an itinerary was created. `createButton` is "Create New Itinerary" in the Add to
 * Itinerary sheet; `firstSave` is Done in the sheet for a user with no itineraries, which
 * creates one for them.
 */
export type CreatedItinerarySource = "createButton" | "firstSave"

/**
 * When a user's new itinerary is created, in City Guide
 *
 * This schema describes events sent to Segment from [[createdItinerary]]
 *
 *  @example
 *  ```
 *  {
 *    action: "createdItinerary",
 *    city_slug: "london-united-kingdom",
 *    context_screen_owner_slug: "london-united-kingdom",
 *    context_screen_owner_type: "cityGuide",
 *    owner_id: "b0b1c2d3-e4f5-4a6b-8c9d-0e1f2a3b4c5d",
 *    source: "firstSave"
 *  }
 * ```
 */
export interface CreatedItinerary {
  action: ActionType.createdItinerary
  city_slug: string
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  context_screen_owner_type: ScreenOwnerType
  /** The new itinerary. */
  owner_id: string
  source: CreatedItinerarySource
}

/**
 * The itinerary fields a user can change in the Edit Itinerary sheet
 */
export type EditedItineraryField = "title" | "notes" | "cover"

/**
 * When a user saves changes to one of their itineraries in the Edit Itinerary sheet, in
 * City Guide
 *
 * This schema describes events sent to Segment from [[editedItinerary]]
 *
 *  @example
 *  ```
 *  {
 *    action: "editedItinerary",
 *    changed: ["title", "notes"],
 *    context_screen_owner_id: "b0b1c2d3-e4f5-4a6b-8c9d-0e1f2a3b4c5d",
 *    context_screen_owner_type: "cityGuideItinerary",
 *    owner_id: "b0b1c2d3-e4f5-4a6b-8c9d-0e1f2a3b4c5d"
 *  }
 * ```
 */
export interface EditedItinerary {
  action: ActionType.editedItinerary
  changed: EditedItineraryField[]
  context_screen_owner_id?: string
  context_screen_owner_type: ScreenOwnerType
  owner_id: string
}

/**
 * When a user deletes one of their itineraries, in City Guide
 *
 * This schema describes events sent to Segment from [[deletedItinerary]]
 *
 *  @example
 *  ```
 *  {
 *    action: "deletedItinerary",
 *    context_screen_owner_id: "b0b1c2d3-e4f5-4a6b-8c9d-0e1f2a3b4c5d",
 *    context_screen_owner_type: "cityGuideItinerary",
 *    owner_id: "b0b1c2d3-e4f5-4a6b-8c9d-0e1f2a3b4c5d"
 *  }
 * ```
 */
export interface DeletedItinerary {
  action: ActionType.deletedItinerary
  context_screen_owner_id?: string
  context_screen_owner_type: ScreenOwnerType
  owner_id: string
}

/**
 * When a user drags a stop to a new position in one of their itineraries, in City Guide
 *
 * This schema describes events sent to Segment from [[reorderedItineraryStop]]
 *
 *  @example
 *  ```
 *  {
 *    action: "reorderedItineraryStop",
 *    context_screen_owner_id: "b0b1c2d3-e4f5-4a6b-8c9d-0e1f2a3b4c5d",
 *    context_screen_owner_type: "cityGuideItinerary",
 *    owner_id: "b0b1c2d3-e4f5-4a6b-8c9d-0e1f2a3b4c5d",
 *    stop_id: "c1d2e3f4-a5b6-4c7d-8e9f-0a1b2c3d4e5f"
 *  }
 * ```
 */
export interface ReorderedItineraryStop {
  action: ActionType.reorderedItineraryStop
  context_screen_owner_id?: string
  context_screen_owner_type: ScreenOwnerType
  /** The itinerary. */
  owner_id: string
  stop_id: string
}
