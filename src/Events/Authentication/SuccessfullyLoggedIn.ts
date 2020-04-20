import { ActionType } from "Schema"
import { SuccessfullyLoggedIn } from "Schema/Event"
import { AccountArgs } from "./Typings"

/**
 * Action fired when a user logs into an existing account
 *
 * @example
 * successfullyLoggedIn({
 *   authRedirect: "https://artsy.net/artist/andy-warhol"
 *   contextModule: ContextModule.popUpModal,
 *   intent: AuthIntent.viewEditorial,
 *   service: AuthService.email
 *   trigger: "timed"
 * })
 */
export const successfullyLoggedIn = ({
  authRedirect,
  contextModule,
  intent,
  service,
  trigger,
}: AccountArgs): SuccessfullyLoggedIn => {
  return {
    action: ActionType.successfullyLoggedIn,
    auth_redirect: authRedirect,
    context_module: contextModule,
    intent,
    service,
    trigger: trigger || "click",
  }
}
