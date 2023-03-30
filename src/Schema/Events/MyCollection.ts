import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

export type Platform = "web" | "mobile"

/**
 * Schema describing 'Add Collected Artwork' events
 * @packageDocumentation
 */

/**
 * A user taps or clicks "add artwork" to add an artwork to My Collection.
 *
 * This schema describes events sent to Segment from {@link ActionType.addCollectedArtwork}
 *
 *  @example
 *  ```
 *  {
 *    action: "addCollectedArtwork",
 *    context_module: "myCollectionHome",
 *    context_owner_type: "myCollection",
 *    platform: "mobile"
 *  }
 * ```
 */
export interface AddCollectedArtwork {
  action: ActionType.addCollectedArtwork
  context_module:
    | ContextModule.myCollectionHome
    | ContextModule.myCollectionOnboarding
  context_owner_type:
    | OwnerType.myCollection
    | OwnerType.myCollectionOnboarding
    | OwnerType.myCollectionInsights
  platform: Platform
}

/**
 * Schema describing 'Save Collected Artwork' events
 * @packageDocumentation
 */

/**
 * A user taps "save artwork" to save an artwork to My Collection.
 *
 * This schema describes events sent to Segment from {@link ActionType.saveCollectedArtwork}
 *
 *  @example
 *  ```
 *  {
 *    action: "saveCollectedArtwork",
 *    context_module: "myCollectionHome",
 *    context_owner_type: "myCollection",
 *    platform: "mobile"
 *  }
 * ```
 */
export interface SaveCollectedArtwork {
  action: ActionType.saveCollectedArtwork
  context_module: ContextModule.myCollectionHome
  context_owner_type: OwnerType.myCollection
  platform: Platform
}

/**
 * Schema describing 'Edit Collected Artwork' events
 * @packageDocumentation
 */

/**
 * A user taps "Edit" to edit an artwork in My Collection.
 *
 * This schema describes events sent to Segment from {@link ActionType.editCollectedArtwork}
 *
 *  @example
 *  ```
 *  {
 *    action: "editCollectedArtwork",
 *    context_module: "myCollectionArtwork",
 *    context_owner_type: "myCollectionArtwork",
 *    context_owner_id: "my-artwork-id",
 *    context_owner_slug: "my-artwork-slug"
 *    platform: "web"
 *  }
 * ```
 */
export interface EditCollectedArtwork {
  action: ActionType.editCollectedArtwork
  context_module: ContextModule.myCollectionArtwork
  context_owner_type: OwnerType.myCollectionArtwork
  context_owner_id: string
  context_owner_slug: string
  platform: Platform
}

/**
 * Schema describing 'Delete Collected Artwork' events
 * @packageDocumentation
 */

/**
 * A user taps "delete artwork" to delete an artwork from My Collection.
 *
 * This schema describes events sent to Segment from {@link ActionType.deleteCollectedArtwork}
 *
 *  @example
 *  ```
 *  {
 *    action: "deleteCollectedArtwork",
 *    context_module: "myCollectionArtwork",
 *    context_owner_type: "myCollectionArtwork"
 *    context_owner_id: "my-artwork-id",
 *    context_owner_slug: "my-artwork-slug",
 *    platform: "web"
 *  }
 * ```
 */
export interface DeleteCollectedArtwork {
  action: ActionType.deleteCollectedArtwork
  context_module: ContextModule.myCollectionArtwork
  context_owner_type: OwnerType.myCollectionArtwork
  context_owner_id: string
  context_owner_slug: string
  platform: Platform
}

/**
 * A user taps a collected artwork within My Collection
 *
 * This schema describes events sent to Segment from {@link ActionType.tappedCollectedArtwork}
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedCollectedArtwork",
 *    context_module: "myCollectionHome",
 *    context_owner_type: "myCollection",
 *    destination_owner_type: "myCollectionArtwork"
 *    destination_owner_id: "my-collection-artwork-id"
 *    destination_owner_slug: "my-collection-artwork-slug"
 *  }
 * ```
 */
export interface TappedCollectedArtwork {
  action: ActionType.tappedCollectedArtwork
  context_module: ContextModule.myCollectionHome
  context_owner_type: OwnerType.myCollection
  context_owner_id?: string
  destination_owner_type: OwnerType.myCollectionArtwork
  destination_owner_id: string
  destination_owner_slug?: string
}

/**
 * A user taps the artwork image(s) within a MyCollectionArtwork screen
 *
 * This schema describes events sent to Segment from {@link ActionType.tappedCollectedArtworkImages}
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedCollectedArtworkImages",
 *    context_module: "myCollectionArtwork",
 *    context_owner_type: "myCollectionArtwork",
 *    context_owner_id: "collected-artwork-id"
 *  }
 * ```
 */
export interface TappedCollectedArtworkImages {
  action: ActionType.tappedCollectedArtworkImages
  context_module: ContextModule.myCollectionArtwork
  context_owner_type: OwnerType.myCollectionArtwork
  context_owner_id: string
  context_owner_slug?: string
}

/**
 * A user taps on an artist in My Collection Add Artwork Add Artist
 *
 * This schema describes events sent to Segment from {@link ActionType.tappedMyCollectionAddArtworkArtist}
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedMyCollectionAddArtworkArtist",
 *    context_module: "myCollectionAddArtworkArtist",
 *    context_screen: "myCollectionAddArtworkAddArtist",
 *    context_screen_owner_id: "5fad78273c8451000d0c53b9"
 *    context_screen_owner_slug: "andy-warhol"
 *  }
 * ```
 */
export interface TappedMyCollectionAddArtworkArtist {
  action: ActionType.tappedMyCollectionAddArtworkArtist
  context_screen: OwnerType.myCollectionAddArtworkArtist
  context_module: ContextModule.myCollectionAddArtworkAddArtist
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
}

/**
 * Users clicks "Add their name" on the artist selection page
 *
 * This schema describes events sent to Segment from {@link ActionType.addNewArtistName}
 *
 *  @example
 *  ```
 *  {
 *    action: "addNewArtistName",
 *    context_module: "myCollection",
 *    context_owner_type: "myCollectionUploadingFlow",
 *    platform: "web",
 *  }
 * ```
 */
export interface MyColectionAddNewArtistName {
  action: ActionType.addNewArtistName
  context_module: ContextModule.myCollection
  context_owner_type: OwnerType.myCollectionUploadingFlow
  platform: Platform
}

/**
 * Users selects artist from search on the artist selection page
 *
 * This schema describes events sent to Segment from {@link ActionType.selectArtistFromSearch}
 *
 *  @example
 *  ```
 *  {
 *    action: "selectArtistFromSearch",
 *    context_module: "myCollection",
 *    context_owner_type: "myCollectionUploadingFlow",
 *    platform: "web",
 *  }
 * ```
 */
export interface MyCollectionSelectArtistFromSearch {
  action: ActionType.selectArtistFromSearch
  context_mudule: ContextModule.myCollection
  context_owner_type: OwnerType.myCollectionUploadingFlow
  platform: Platform
}

/**
 * Users clicks "Skip" button or "add artwork details" on the "Select an artwork" page
 *
 * This schema describes events sent to Segment from {@link ActionType.addArtworkDetails}
 *
 *  @example
 *  ```
 *  {
 *    action: "addArtworkDetails",
 *    context_module: "myCollection",
 *    context_owner_type: "myCollectionUploadingFlow",
 *    platform: "web",
 *  }
 * ```
 */
export interface MyCollectionAddArtworkDetails {
  action: ActionType.addArtworkDetails
  context_module: ContextModule.myCollection
  context_owner_type: OwnerType.myCollectionUploadingFlow
  platform: Platform
}

/**
 * Users selects artwork from grid on the "Select an artwork" screen
 *
 * This schema describes events sent to Segment from {@link ActionType.selectArtworkFromGrid}
 *
 *  @example
 *  ```
 *  {
 *    action: "selectArtworkFromGrid",
 *    context_module: "myCollection",
 *    context_owner_type: "myCollectionUploadingFlow",
 *    platform: "web",
 *  }
 * ```
 */
export interface MyCollectionSelectArtworkFromGrid {
  action: ActionType.selectArtworkFromGrid
  context_module: ContextModule.myCollection
  context_owner_type: OwnerType.myCollectionUploadingFlow
  platform: Platform
}

/**
 * A user taps on the “request a price estimate” banner
 *
 * This schema describes events sent to Segment from {@link ActionType.tappedRequestPriceEstimate}
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedRequestPriceEstimate",
 *    context_module: "myCollectionArtworkInsights",
 *    context_screen: "myCollectionArtworkInsights",
 *    context_screen_owner_type: "myCollectionArtwork",
 *    context_screen_owner_id: "5fad78273c8451000d0c53b9"
 *    context_screen_owner_slug: "andy-warhol"
 *    demand_index: 8.9
 *  }
 * ```
 */
export interface TappedRequestPriceEstimate {
  action: ActionType.tappedRequestPriceEstimate
  context_module: ContextModule.myCollectionArtworkInsights
  context_screen: OwnerType.myCollectionArtworkInsights
  context_screen_owner_type: OwnerType.myCollectionArtwork
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  demand_index?: number
}

/**
 * A request for a price estimate has been susessfully sent by a user
 *
 * This schema describes events sent to Segment from {@link ActionType.sentRequestPriceEstimate}
 *
 *  @example
 *  ```
 *  {
 *    action: "sentRequestPriceEstimate",
 *    context_module: "myCollectionArtworkInsights",
 *    context_screen: "myCollectionArtworkInsights",
 *    context_screen_owner_type: "myCollectionArtwork",
 *    context_screen_owner_id: "5fad78273c8451000d0c53b9"
 *    context_screen_owner_slug: "andy-warhol"
 *    demand_index: 8.9
 *  }
 * ```
 */
export interface SentRequestPriceEstimate {
  action: ActionType.sentRequestPriceEstimate
  context_module: ContextModule.myCollectionArtworkInsights
  context_screen: OwnerType.myCollectionArtworkInsights
  context_screen_owner_type: OwnerType.myCollectionArtwork
  context_screen_owner_id: string
  context_screen_owner_slug: string
  demand_index?: number
}

/**
 * Upload another artwork
 *
 * This schema describes events sent to Segment from {@link ActionType.tappedUploadAnotherArtwork}
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedUploadAnotherArtwork",
 *    context_screen_owner_type: "myCollectionArtwork"
 *  }
 * ```
 */
export interface TappedUploadAnotherArtwork {
  action: ActionType.tappedUploadAnotherArtwork
  context_screen_owner_type: OwnerType
}
