import { ActionType } from "Schema"
import { CreatedAccount } from "Schema/Event"
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
 *   trigger: "timed"
 * })
 */
export const createdAccount = ({
  authRedirect,
  contextModule,
  intent,
  service,
  trigger,
}: AccountArgs): CreatedAccount => {
  return {
    action: ActionType.createdAccount,
    auth_redirect: authRedirect,
    context_module: contextModule,
    intent,
    service,
    trigger: trigger || "click",
  }
}
