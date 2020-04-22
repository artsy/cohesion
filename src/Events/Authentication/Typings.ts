import { AuthContextModule, AuthIntent } from "../../Schema"
import { AuthService } from "../../Schema/Authentication"

export interface AccountArgs {
  authRedirect: string
  contextModule: AuthContextModule
  copy?: string
  intent: AuthIntent
  onboarding?: boolean
  service: AuthService
  triggerSeconds?: number
  user_id: string
}
