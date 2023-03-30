import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing events for specific user experience design types.
 * @packageDocumentation
 */

/**
 * User has exceeded the upload size limit
 *
 * This schema describes events sent to Segment from {@link ActionType.uploadSizeLimitExceeded}.
 *
 *  @example
 *  ```
 *  {
 *    action: "uploadSizeLimitExceeded",
 *    context_owner_type: "sell",
 *    upload_size_in_kb: 30134512,
 *    expand: TRUE
 *  }
 * ```
 */
export interface UploadSizeLimitExceeded {
  action: ActionType.uploadSizeLimitExceeded
  context_owner_type: OwnerType
  upload_size_in_kb: number
  number_of_files: number
}
