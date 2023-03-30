import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schemas describing experiment events
 * @packageDocumentation
 */

/**
 * A user received an experiment on Artsy.
 *
 * This schema describes events sent to Segment from {@link ActionType.experimentViewed}.
 *
 *  @example
 *  ```
 *  {
 *    action: "experiment_viewed",
 *    experiment_name: "some_experiment_we_are_running",
 *    variant_name: "cool_new_variant",
 *    payload: "10", // optional
 *    context_owner_type: "artwork",
 *    context_owner_id: "55ed8ca57261693d930000b8",
 *    context_owner_slug: "slug"
 *  }
 * ```
 *
 * `payload` is used for variable values that can be sent to the clients as part of the variant.
 * Specifically for Unleash, find some docs about `payload` here:
 * https://docs.getunleash.io/advanced/toggle_variants#variant-payload.
 */
export interface ExperimentViewed {
  action: ActionType.experimentViewed
  experiment_name: string
  service: "unleash"
  // usually "control" or "experiment"
  // can be checked https://unleash.artsy.net/projects/default/features/[feature-flag]/variants
  variant_name: string
  payload?: string
  context_module?: ContextModule
  context_owner_type: OwnerType
  context_owner_screen?: OwnerType
  context_owner_id?: string
  context_owner_slug?: string
}
