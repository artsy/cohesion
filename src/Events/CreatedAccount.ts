import { ActionType, AuthContextModule, AuthIntent, AuthTrigger } from "Schema"
import { AuthService } from "Schema/Authentication"
import { CreatedAccount } from "Schema/Event"

interface CreatedAccountArgs {
  authRedirect: string
  contextModule: AuthContextModule
  intent: AuthIntent
  trigger?: AuthTrigger
  service: AuthService
}

/**
 * Action fired when an auth form is viewed
 *
 * @example
 * createdAccount({
 *   authRedirect: "https://artsy.net/artist/andy-warhol"
 *   contextModule: ContextModule.header,
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
}: CreatedAccountArgs): CreatedAccount => {
  return {
    action: ActionType.createdAccount,
    auth_redirect: authRedirect,
    context_module: contextModule,
    intent,
    service,
    trigger: trigger || "click",
  }
}
