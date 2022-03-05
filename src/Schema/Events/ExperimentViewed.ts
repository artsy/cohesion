import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing experiment events
 * @packageDocumentation
 */

/**
 * A user received an experiment on Artsy.
 *
 * This schema describes events sent to Segment from [[Experiment]].
 *
 *  @example
 *  ```
 *  {
 *    action: "experiment",
 *    service: "unleash",
 *    experiment_name: "some_experiment_we_are_running",
 *    variant_name: "cool_new_variant",
 *    payload: "10", // optional
 *    context_owner_type: "artwork",
 *    context_owner_id: "55ed8ca57261693d930000b8",
 *  }
 * ```
 *
 * `payload` is used for variable values that can be sent to the clients as part of the variant.
 * Specifically for Unleash, find some docs about `payload` here:
 * https://docs.getunleash.io/advanced/toggle_variants#variant-payload.
 */
export interface ExperimentViewed {
  action: ActionType.experimentViewed
  service: "unleash" | string
  experiment_name: string
  variant_name: "control" | string // usually it will be "control" or the other names of the variants
  payload?: string

  context_owner_type: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
}

