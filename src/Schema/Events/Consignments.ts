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
