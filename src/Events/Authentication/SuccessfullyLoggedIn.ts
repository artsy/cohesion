import { ActionType, AuthModalType } from "../../Schema"
import { SuccessfullyLoggedIn } from "../../Schema/Event"
import { AccountArgs } from "./Typings"

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
 *   service: AuthService.email,
 *   triggerSeconds: 3,
 *   user_id: "5bd8b675776bd6002c86526c"
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
  user_id,
}: AccountArgs): SuccessfullyLoggedIn => {
  return {
    action: ActionType.successfullyLoggedIn,
    auth_redirect: authRedirect,
    context_module: contextModule,
    modal_copy: copy,
    intent,
    service,
    trigger: (triggerSeconds && "timed") || "click",
    type: AuthModalType.login,
    user_id,
  }
}
