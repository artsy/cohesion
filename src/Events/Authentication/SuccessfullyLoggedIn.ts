import {
  ActionType,
  AuthModalType,
  AuthContextModule,
  AuthIntent,
  AuthService,
} from "../../Schema"
import { SuccessfullyLoggedIn } from "../../Schema/Event"

export interface SuccessfullyLoggedInArgs {
  authRedirect: string
  contextModule: AuthContextModule
  copy?: string
  intent: AuthIntent
  service: AuthService
  triggerSeconds?: number
  userId: string
}

/**
 * Action fired when a user logs into an existing account
 *
 * @example
 * ```
 * successfullyLoggedIn({
 *   authRedirect: "https://artsy.net/artist/andy-warhol",
 *   contextModule: ContextModule.popUpModal,
 *   copy: "Sign up to follow artists",
 *   intent: AuthIntent.viewEditorial,
 *   service: "email",
 *   triggerSeconds: 3,
 *   userId: "5bd8b675776bd6002c86526c"
 * })
 * ```
 */
export const successfullyLoggedIn = ({
  authRedirect,
  contextModule,
  copy,
  intent,
  service,
  triggerSeconds,
  userId,
}: SuccessfullyLoggedInArgs): SuccessfullyLoggedIn => {
  return {
    action: ActionType.successfullyLoggedIn,
    auth_redirect: authRedirect,
    context_module: contextModule,
    modal_copy: copy,
    intent,
    service,
    trigger: (triggerSeconds && "timed") || "click",
    trigger_seconds: triggerSeconds,
    type: AuthModalType.login,
    user_id: userId,
  }
}
