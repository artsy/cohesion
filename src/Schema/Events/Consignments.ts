import { ActionType } from "."

/**
 * Schema describing 'Consignment' events
 * @packageDocumentation
 */

/**
 * A user submits their consignment and triggers this backend consignment submission event.
 *
 * This schema describes events sent to Segment from [[consignmentSubmitted]]
 *
 *  @example
 *  ```
 *  {
 *    action: "consignmentSubmitted",
 *    submission_id: "66355",
 *    user_email: "xx@gmail.com"
 *    user_id: "5bd8b675776bd6002c86526c"
 *  }
 * ```
 */
export interface ConsignmentSubmitted {
  action: ActionType.consignmentSubmitted
  submission_id: string
  user_email: string
  user_id?: string
}

/**
 * First step of the consignment submission flow; user confirms details of their artwork.
 *
 * This schema describes events sent to Segment from [[artworkDetailsCompleted]]
 *
 *  @example
 *  ```
 *  {
 *    action: "artworkDetailsCompleted",
 *    submission_id: "52521",
 *    user_email: "kieranmbh@gmail.com"
 *    user_id: "5cd6b173746be6109c86321d"
 *  }
 * ```
 */
export interface ArtworkDetailsCompleted {
  action: ActionType.artworkDetailsCompleted
  submission_id: string
  user_email: string
  user_id?: string
}

/**
 * Second step of the consignment submission flow; user uploads photos of their artwork.
 *
 * This schema describes events sent to Segment from [[uploadPhotosCompleted]]
 *
 *  @example
 *  ```
 *  {
 *    action: "uploadPhotosCompleted",
 *    submission_id: "52521",
 *    user_email: "kieranmbh@gmail.com"
 *    user_id: "5cd6b173746be6109c86321d"
 *  }
 * ```
 */
export interface UploadPhotosCompleted {
  action: ActionType.uploadPhotosCompleted
  submission_id: string
  user_email: string
  user_id?: string
}

/**
 * Third step of the consignment submission flow; user adds contact information for their artwork.
 *
 * This schema describes events sent to Segment from [[contactInformationCompleted]]
 *
 *  @example
 *  ```
 *  {
 *    action: "contactInformationCompleted",
 *    submission_id: "52521",
 *    user_email: "kieranmbh@gmail.com"
 *    user_id: "5cd6b173746be6109c86321d"
 *  }
 * ```
 */
export interface ContactInformationCompleted {
  action: ActionType.contactInformationCompleted
  submission_id: string
  user_email: string
  user_id?: string
}

/**
 * User clicks/taps to re-enter the submission flow after successfully submitting an artwork for consignment.
 *
 * This schema describes events sent to Segment from [[submitAnotherArtwork]]
 *
 *  @example
 *  ```
 *  {
 *    action: "submitAnotherArtwork",
 *    submission_id: "52521",
 *    user_email: "kieranmbh@gmail.com"
 *    user_id: "5cd6b173746be6109c86321d"
 *  }
 * ```
 */
export interface SubmitAnotherArtwork {
  action: ActionType.submitAnotherArtwork
  submission_id: string
  user_email: string
  user_id?: string
}

/**
 * User clicks/taps to view the artwork they just submitted in MyCollection.
 *
 * This schema describes events sent to Segment from [[viewArtworkMyCollection]]
 *
 *  @example
 *  ```
 *  {
 *    action: "viewArtworkMyCollection",
 *    submission_id: "52521",
 *    user_email: "kieranmbh@gmail.com"
 *    user_id: "5cd6b173746be6109c86321d"
 *  }
 * ```
 */
export interface ViewArtworkMyCollection {
  action: ActionType.viewArtworkMyCollection
  submission_id: string
  user_email: string
  user_id?: string
}
