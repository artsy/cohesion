import { AuthContextModule, AuthIntent, AuthTrigger } from "../../Schema"
import { AuthService } from "../../Schema/Authentication"

export interface AccountArgs {
  authRedirect: string
  contextModule: AuthContextModule
  intent: AuthIntent
  trigger?: AuthTrigger
  service: AuthService
}
