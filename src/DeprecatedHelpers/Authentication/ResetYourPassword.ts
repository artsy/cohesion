import {
  ActionType,
  AuthContextModule,
  AuthIntent,
  AuthModalType,
  AuthService,
  ResetYourPassword,
} from "../../Schema"

export interface ResetYourPasswordArgs {
  authRedirect: string
  contextModule: AuthContextModule
  copy?: string
  intent: AuthIntent
  service: AuthService
  triggerSeconds?: number
}

/**
 * Action fired when a user user requests to reset their password for an existing account
 *
 * @example
 * ```
 * resetYourPassword({
 *   authRedirect: "https://artsy.net/artist/andy-warhol",
 *   contextModule: ContextModule.popUpModal,
 *   copy: "Sign up to follow artists",
 *   intent: Intent.viewArtist,
 *   service: "email",
 *   triggerSeconds: 3
 * })
 * ```
 * @deprecated
 */
export const resetYourPassword = ({
  authRedirect,
  contextModule,
  copy,
  intent,
  service,
  triggerSeconds,
}: ResetYourPasswordArgs): ResetYourPassword => {
  return {
    action: ActionType.resetYourPassword,
    auth_redirect: authRedirect,
    context_module: contextModule,
    intent,
    modal_copy: copy,
    service,
    trigger: (triggerSeconds && "timed") || "click",
    trigger_seconds: triggerSeconds,
    type: AuthModalType.forgot,
  }
}
