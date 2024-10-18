import { AuthContextModule, ContextModule } from "../Values/ContextModule"
import { AuthIntent } from "../Values/Intent"
import { ActionType } from "."

/**
 * Schemas describing authentication events
 * @packageDocumentation
 */

/**
 * A user viewed an authentication form
 *
 * This schema describes events sent to Segment from [[authImpression]]
 *
 *  @example
 *  ```
 *  {
 *    action: "authImpression",
 *    context_module: "popUpModal",
 *    intent: "viewArtist",
 *    modal_copy: "Sign up to follow artists",
 *    onboarding: true,
 *    trigger: "timed",
 *    trigger_seconds: 4,
 *    type: "signup",
 *  }
 * ```
 */
export interface AuthImpression {
  action: ActionType.authImpression
  context_module: AuthContextModule
  intent: AuthIntent
  modal_copy?: string
  onboarding: boolean
  trigger: AuthTrigger
  trigger_seconds?: number
  type: AuthModalType
}

/**
 * A user created an account
 *
 * This schema describes events sent to Segment from [[createdAccount]]
 *
 *  @example
 *  ```
 *  {
 *    action: "createdAccount",
 *    auth_redirect: "https://artsy.net/artist/andy-warhol",
 *    context_module: "popUpModal",
 *    intent: "viewArtist",
 *    modal_copy: "Sign up to follow artists",
 *    onboarding: true,
 *    service: "email",
 *    trigger: "timed",
 *    trigger_seconds: 4,
 *    type: signup,
 *    user_id: "5bd8b675776bd6002c86526c"
 *  }
 * ```
 */
export interface CreatedAccount {
  action: ActionType.createdAccount
  auth_redirect: string
  context_module: AuthContextModule
  intent: AuthIntent
  modal_copy?: string
  onboarding: boolean
  service: AuthService
  trigger: AuthTrigger
  trigger_seconds?: number
  type: AuthModalType
  user_id: string
}

/**
 * A user requested to reset their password for an existing account
 *
 * This schema describes events sent to Segment from [[resetYourPassword]]
 *
 *  @example
 *  ```
 *  {
 *    action: "resetYourPassword",
 *    auth_redirect: "https://artsy.net/artist/andy-warhol",
 *    context_module: "popUpModal",
 *    intent: "viewArtist",
 *    modal_copy: "Sign up to follow artists",
 *    service: "email",
 *    trigger: "timed",
 *    trigger_seconds: 4,
 *    type: "forgot"
 *  }
 * ```
 */
export interface ResetYourPassword {
  action: ActionType.resetYourPassword
  auth_redirect: string
  context_module: AuthContextModule
  intent: AuthIntent
  modal_copy?: string
  service: AuthService
  trigger: AuthTrigger
  trigger_seconds?: number
  type: AuthModalType
}

/**
 * A user successfully logged in to their existing account
 *
 * This schema describes events sent to Segment from [[successfullyLoggedIn]]
 *
 *  @example
 *  ```
 *  {
 *    action: "successfullyLoggedIn",
 *    auth_redirect: "https://artsy.net/artist/andy-warhol",
 *    context_module: "popUpModal",
 *    intent: "viewArtist",
 *    modal_copy: "Sign up to follow artists",
 *    service: "email",
 *    trigger: "timed",
 *    trigger_seconds: 4,
 *    type: "login",
 *    user_id: "5bd8b675776bd6002c86526c"
 *  }
 * ```
 */
export interface SuccessfullyLoggedIn {
  action: ActionType.successfullyLoggedIn
  auth_redirect: string
  context_module: AuthContextModule
  intent: AuthIntent
  modal_copy?: string
  service: AuthService
  trigger: AuthTrigger
  trigger_seconds?: number
  type: AuthModalType
  user_id: string
}

/**
 * The type of authentication modal displayed
 */
export enum AuthModalType {
  /** Request to password for an existing account */
  forgot = "forgot",
  /** Log in to an existing account */
  login = "login",
  /** Sign up for a new account */
  signup = "signup",
  /** Fill out your email to enter the signup or login flow */
  welcome = "welcome",
}

/**
 * The type of action that opened the authentication modal
 */
export type AuthTrigger = "click" | "tap" | "timed" | "scroll"

/**
 * the service the user used to authenticate
 */
export type AuthService = "apple" | "email" | "facebook" | "google"

/**
 * A user provides us with important data during the onboarding flow
 *
 * This schema describes events sent to Segment from [[OnboardingUserInputData]]
 *
 *  @example
 *  ```
 *  {
 *    action: "onboardingUserInputData",
 *    context_module: "onboardingInterests",
 *    data_input: "[developingArtTastes]"
 *  }
 * ```
 */
export interface OnboardingUserInputData {
  action: ActionType.onboardingUserInputData
  context_module: ContextModule
  data_input: string
}

/**
 * A user starts the onboarding flow
 *
 * This schema describes events sent to Segment from [[startedOnboarding]]
 *
 *  @example
 *  ```
 *  {
 *    action: "startedOnboarding",
 *  }
 * ```
 */
export interface StartedOnboarding {
  action: ActionType.startedOnboarding
}

/**
 * A user completes the onboarding flow
 *
 * This schema describes events sent to Segment from [[completedOnboarding]]
 *
 *  @example
 *  ```
 *  {
 *    action: "completedOnboarding",
 *  }
 * ```
 */
export interface CompletedOnboarding {
  action: ActionType.completedOnboarding
}
