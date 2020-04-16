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
 * Related to [[authImpression]]
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
