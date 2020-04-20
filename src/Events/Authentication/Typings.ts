import { AuthContextModule, AuthIntent, AuthTrigger } from "index"
import { AuthService } from "Schema/Authentication"

export interface AccountArgs {
  authRedirect: string
  contextModule: AuthContextModule
  intent: AuthIntent
  trigger?: AuthTrigger
  service: AuthService
}
