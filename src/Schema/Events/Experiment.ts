import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing experiment events
 * @packageDocumentation
 */

/**
 * A user received an experiment on Artsy
 *
 * This schema describes events sent to Segment from [[Experiment]]
 *
 *  @example
 *  ```
 *  {
 *    action: "experiment",
 *    event: "get_variant",
 *    service: "unleash",
 *    experiment_name: "some_experiment_we_are_running",
 *    enabled: true,
 *    variant_name: "some_variant_for_this_user"
 *    payload: "some_payload",
 *    context_owner_type: "artwork",
 *    context_owner_id: "55ed8ca57261693d930000b8",
 *  }
 * ```
 */
export type Experiment = {
  action: ActionType.experiment
  service: "unleash" | string
  experiment_name: string
  enabled: string

  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
} & (
  | {
      event: "get_flag"
    }
  | {
      event: "get_variant"
      variant_name: string
      payload?: string
    }
)
