import { OwnerType, PageOwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing 'Lists' events
 * @packageDocumentation
 */

/**
 * When a user adds an artwork to an artwork list
 *
 * This schema describes events sent to Segment from [[addedArtworkToArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "addedArtworkToArtworkList",
 *    context_page_owner_id: "641b795ae11bda000c80d58d",
 *    context_page_owner_slug: "banksy-gangsta-rat-unsigned-49",
 *    context_page_owner_type: "artwork",
 *    artwork_list_name: "List #1"
 *  }
 * ```
 */
export interface AddedArtworkToArtworkList {
  action: ActionType.addedArtworkToArtworkList
  context_page_owner_id?: string
  context_page_owner_slug?: string
  context_page_owner_type: PageOwnerType
  artwork_list_name: string
}

/**
 * When a user creates an artwork list
 *
 * This schema describes events sent to Segment from [[createdArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "createdArtworkList",
 *    context_page_owner_id: "641b795ae11bda000c80d58d",
 *    context_page_owner_slug: "banksy-gangsta-rat-unsigned-49",
 *    context_page_owner_type: "artwork",
 *    artwork_list_name: "List #1"
 *  }
 * ```
 */
export interface CreatedArtworkList {
  action: ActionType.createdArtworkList
  context_page_owner_id?: string
  context_page_owner_slug?: string
  context_page_owner_type: PageOwnerType
  artwork_list_name: string
}

/**
 * When a user edits an artwork list
 *
 * This schema describes events sent to Segment from [[deletedArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "deletedArtworkList",
 *    context_page_owner_type: "saves",
 *    artwork_list_name: "List #1"
 *  }
 * ```
 */
export interface DeletedArtworkList {
  action: ActionType.deletedArtworkList
  context_page_owner_type: OwnerType.saves
  artwork_list_name: string
}

/**
 * When a user edits an artwork list
 *
 * This schema describes events sent to Segment from [[editedArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "editedArtworkList",
 *    context_page_owner_type: "saves",
 *    artwork_list_name: "List #1"
 *  }
 * ```
 */
export interface EditedArtworkList {
  action: ActionType.editedArtworkList
  context_page_owner_type: OwnerType.saves
  artwork_list_name: string
}

/**
 * When a user clicks to view an artwork list
 *
 * This schema describes events sent to Segment from [[viewedArtworkList]]
 *
 *  @example
 *  ```
 *  {
 *    action: "viewedArtworkList",
 *    context_page_owner_type: "saves",
 *    artwork_list_name: "List #1"
 *  }
 * ```
 */
export interface ViewedArtworkList {
  action: ActionType.viewedArtworkList
  context_page_owner_type: OwnerType.saves
  artwork_list_name: string
}
