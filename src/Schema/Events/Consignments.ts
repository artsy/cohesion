import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
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
 *    context_module: "contactInformation",
 *    context_owner_type: "consignmentFlow",
 *    submission_id: "66355",
 *    user_email: "xx@gmail.com"
 *    user_id: "5bd8b675776bd6002c86526c"
 *  }
 * ```
 */
export interface ConsignmentSubmitted {
  action: ActionType.consignmentSubmitted
  context_module: ContextModule.contactInformation
  context_owner_type: OwnerType.consignmentFlow
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
 *    context_module: "artworkDetails",
 *    context_owner_type: "consignmentFlow",
 *    submission_id: "52521",
 *    user_email: "kieranmbh@gmail.com"
 *    user_id: "5cd6b173746be6109c86321d"
 *  }
 * ```
 */
export interface ArtworkDetailsCompleted {
  action: ActionType.artworkDetailsCompleted
  context_module: ContextModule.artworkDetails
  context_owner_type: OwnerType.consignmentFlow
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
 *    context_module: "uploadPhotos",
 *    context_owner_type: "consignmentFlow",
 *    submission_id: "52521",
 *    user_email: "kieranmbh@gmail.com"
 *    user_id: "5cd6b173746be6109c86321d"
 *  }
 * ```
 */
export interface UploadPhotosCompleted {
  action: ActionType.uploadPhotosCompleted
  context_module: ContextModule.uploadPhotos
  context_owner_type: OwnerType.consignmentFlow
  submission_id: string
  user_email: string
  user_id: string | undefined
}

/**
 * First or Final step of the consignment submission flow; user provides their contact information.
 *
 * This schema describes events sent to Segment from [[contactInformation]]
 *
 *  @example
 *  ```
 *  {
 *    action: "contactInformationCompleted",
 *    context_module: "contactInformation",
 *    context_owner_type: "consignmentFlow",
 *    submission_id: "52521",
 *    user_email: "kieranmbh@gmail.com"
 *    user_id: "5cd6b173746be6109c86321d"
 *  }
 * ```
 */
 export interface ContactInformationCompleted {
  action: ActionType.contactInformationCompleted
  context_module: ContextModule.contactInformation
  context_owner_type: OwnerType.consignmentFlow
  submission_id?: string // submission_id may be not be available if this is the first step in submission flow
  user_email: string
  user_id: string | undefined
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
 *    context_owner_type: "consignmentSubmission",
 *    submission_id: "52521",
 *    user_email: "kieranmbh@gmail.com"
 *    user_id: "5cd6b173746be6109c86321d"
 *  }
 * ```
 */
export interface SubmitAnotherArtwork {
  action: ActionType.submitAnotherArtwork
  context_owner_type: OwnerType.consignmentSubmission
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
 *    context_owner_type: "consignmentSubmission",
 *    submission_id: "52521",
 *    user_email: "kieranmbh@gmail.com"
 *    user_id: "5cd6b173746be6109c86321d"
 *  }
 * ```
 */
export interface ViewArtworkMyCollection {
  action: ActionType.viewArtworkMyCollection
  context_owner_type: OwnerType.consignmentSubmission
  submission_id: string
  user_email: string
  user_id?: string
}
