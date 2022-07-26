/**
 * TODO:
 * - See if we can get rid of all the namespacing and transform before sending.
 *   E.g. inside the `ContextPage` interface have just a `page` field that
 *   transforms to `context_page`.
 * - If the above gets done, we could also dry up the ‘owner’ in both
 *   `ContextPage` and `Result`.
 */

export * from "./DeprecatedValues"

import { Event } from "../Schema"
import { AuctionInfo } from "./DeprecatedAuctionInfo"
import { ContextModule } from "./DeprecatedContextModule"
import { ContextPage } from "./DeprecatedContextPage"
import { Flow } from "./DeprecatedFlow"
import { AuthenticationInteraction, Interaction } from "./DeprecatedInteraction"
import { Label } from "./DeprecatedLabel"
import { Failure, Success } from "./DeprecatedResult"
import { Type } from "./DeprecatedType"
import { ActionType } from "./DeprecatedValues"

interface Uncategorized {
  changed: any
  current: any
  item_type: any
  item_id: any
  query: any
  item_number: number
  experiment_id: string
  experiment_name: string
  variation_id: string
  variation_name: string
  nonInteraction: number
  action_type: ActionType | string
}

export type Trackables =
  | AuthenticationInteraction
  | ContextModule
  | ContextPage
  | Flow
  | Interaction
  | Label
  | Success
  | Failure
  | Type
  | Uncategorized
  | AuctionInfo
  | Event

/**
 * A sentinel type used to signal that anything goes in order to be able to
 * support old Force schema.
 *
 * @example
 *
 *     ```ts
 *     import * as Schema from "@artsy/cohesion"
 *
 *     @track({ … } as Schema.Old)
 */
export type Old = any
