import { ActionType } from "./ActionType"
import {
  AuthContextModule,
  AuthIntent,
  AuthModalType,
  AuthTrigger,
} from "./Authentication"

/**
 * Schemas describing for individual events by ActionType
 * @packageDocumentation
 */

/**
 * A user viewed an authentication form
 *
 * This schema describes events sent to Segment from [[authImpression]]
 *
 *  @example
 *  ```
 *  {
 *    action: "authImpression"
 *    context_module: "popUpModal"
 *    intent: "viewArtist"
 *    modal_copy: "Sign up to follow artists"
 *    onboarding: true
 *    trigger: "timed"
 *    trigger_seconds: 4
 *    type: "signup"
 *  }
 * ```
 */
export interface AuthImpression {
  action: ActionType.authImpression
  context_module: AuthContextModule
  intent: AuthIntent
  modal_copy?: string
  onboarding: boolean
  trigger: AuthTrigger
  trigger_seconds?: number
  type: AuthModalType
}
