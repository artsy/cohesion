import {
  ActionType,
  AuthContextModule,
  AuthImpression,
  AuthIntent,
  AuthModalType,
  AuthTrigger,
} from "../../Schema"

export interface AuthImpressionArgs {
  copy?: string
  contextModule: AuthContextModule
  intent: AuthIntent
  onboarding?: boolean
  trigger?: AuthTrigger
  triggerSeconds?: number
  type: AuthModalType
}

/**
 * Action fired when a user views an authentication form
 *
 * @example
 *  ```
 *  authImpression({
 *    contextModule: ContextModule.header,
 *    intent: AuthIntent.viewEditorial,
 *    type: AuthModalType.signup,
 *  })
 * ```
 */
export const authImpression = ({
  contextModule,
  intent,
  copy,
  onboarding,
  trigger,
  triggerSeconds,
  type,
}: AuthImpressionArgs): AuthImpression => {
  return {
    action: ActionType.authImpression,
    context_module: contextModule,
    intent,
    modal_copy: copy,
    onboarding: onboarding || false,
    trigger: trigger || (triggerSeconds && "timed") || "click",
    trigger_seconds: triggerSeconds,
    type,
  }
}
