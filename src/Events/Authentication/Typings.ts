import { AuthContextModule, AuthIntent } from "../../Schema"
import { AuthService } from "../../Schema/Authentication"

export interface AccountArgs {
  authRedirect: string
  contextModule: AuthContextModule
  intent: AuthIntent
  triggerSeconds?: number
  service: AuthService
}
