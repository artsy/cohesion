import {
  ActionType,
  AuthModalType,
  AuthContextModule,
  AuthIntent,
  AuthService,
} from "../../Schema"
import { CreatedAccount } from "../../Schema/Event"

export interface CreatedAccountArgs {
  authRedirect: string
  contextModule: AuthContextModule
  copy?: string
  intent: AuthIntent
  onboarding?: boolean
  service: AuthService
  triggerSeconds?: number
  userId: string
}

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
 *   service: "email",
 *   triggerSeconds: 3,
 *   userId: "5bd8b675776bd6002c86526c"
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
  userId,
}: CreatedAccountArgs): CreatedAccount => {
  return {
    action: ActionType.createdAccount,
    auth_redirect: authRedirect,
    context_module: contextModule,
    modal_copy: copy,
    intent,
    onboarding: onboarding || false,
    service,
    trigger: (triggerSeconds && "timed") || "click",
    trigger_seconds: triggerSeconds,
    type: AuthModalType.signup,
    user_id: userId,
  }
}
