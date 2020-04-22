import { ActionType } from "../../Schema"
import { CreatedAccount } from "../../Schema/Event"
import { AccountArgs } from "./Typings"

/**
 * Action fired when a user creates an account
 *
 * @example
 * createdAccount({
 *   authRedirect: "https://artsy.net/artist/andy-warhol"
 *   contextModule: ContextModule.popUpModal,
 *   intent: AuthIntent.viewEditorial,
 *   service: AuthService.email
 *   triggerSeconds: 3
 * })
 */
export const createdAccount = ({
  authRedirect,
  contextModule,
  intent,
  service,
  triggerSeconds,
}: AccountArgs): CreatedAccount => {
  return {
    action: ActionType.createdAccount,
    auth_redirect: authRedirect,
    context_module: contextModule,
    intent,
    service,
    trigger: (triggerSeconds && "timed") || "click",
  }
}
