import { ActionType, AuthModalType } from "../../Schema"
import { CreatedAccount } from "../../Schema/Event"
import { AccountArgs } from "./Typings"

/**
 * Action fired when a user creates an account
 *
 * @example
 * ```
 * createdAccount({
 *   authRedirect: "https://artsy.net/artist/andy-warhol",
 *   contextModule: ContextModule.popUpModal,
 *   copy: "Sign up to follow artists",
 *   intent: AuthIntent.viewEditorial,
 *   onboarding: true,
 *   service: AuthService.email,
 *   triggerSeconds: 3,
 *   user_id: "5bd8b675776bd6002c86526c"
 * })
 * ```
 */
export const createdAccount = ({
  authRedirect,
  contextModule,
  copy,
  intent,
  onboarding,
  service,
  triggerSeconds,
  user_id,
}: AccountArgs): CreatedAccount => {
  return {
    action: ActionType.createdAccount,
    auth_redirect: authRedirect,
    context_module: contextModule,
    modal_copy: copy,
    intent,
    onboarding: onboarding || false,
    service,
    trigger: (triggerSeconds && "timed") || "click",
    type: AuthModalType.signup,
    user_id,
  }
}
