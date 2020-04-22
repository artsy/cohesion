import { 
  ActionType 
} from "./ActionType"

import {
  AuthContextModule,
  AuthIntent,
  AuthModalType,
  AuthTrigger,
  AuthService,
} from "./Authentication"

import {
  ContextModule
} from "./ContextModule"

import {
  ScreenOwnerType
} from "./ScreenOwnerType"


/**
 * Schemas describing for individual events by ActionType
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
 *    action: "authImpression"
 *    context_module: "popUpModal"
 *    intent: "viewArtist"
 *    modal_copy: "Sign up to follow artists"
 *    onboarding: true
 *    trigger: "timed"
 *    trigger_seconds: 4
 *    type: "signup"
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
 *    action: "createdAccount"
 *    auth_redirect: "https://artsy.net/artist/andy-warhol"
 *    context_module: "popUpModal"
 *    intent: "viewArtist"
 *    service: "email"
 *    trigger: "timed"
 *  }
 * ```
 */
export interface CreatedAccount {
  action: ActionType.createdAccount
  context_module: AuthContextModule
  intent: AuthIntent
  trigger: AuthTrigger
  auth_redirect: string
  service: AuthService
}

/**
 * A user successfully logged in to their existing account
 *
 * This schema describes events sent to Segment from [[successfullyLoggedIn]]
 *
 *  @example
 *  ```
 *  {
 *    action: "successfullyLoggedIn"
 *    context_module: "popUpModal"
 *    intent: "viewArtist"
 *    trigger: "timed"
 *    auth_redirect: "https://artsy.net/artist/andy-warhol"
 *    service: "email"
 *  }
 * ```
 */
export interface SuccessfullyLoggedIn {
  action: ActionType.successfullyLoggedIn
  context_module: AuthContextModule
  intent: AuthIntent
  trigger: AuthTrigger
  auth_redirect: string
  service: AuthService
}

/**
 * A user taps a rail, card, or other grouping of entities on iOS
 *
 * This schema describes events sent to Segment from [[tappedEntityGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedEntityGroup"
 *    context_module: "newWorksByArtistsYouFollowRail"
 *    context_screen_owner_type: Home
 *    destination_screen_owner_type: Artwork
 *    destination_screen_owner_id: "5e9a7a238483bf000e2c4c5e"
 *    destination_screen_owner_slug: "romain-jacquet-lagreze-makeshift-garden-hong-kong"
 *    horizontal_slide_position: 1
 *    module_height: "single"
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface tappedEntityGroup {
  action: ActionType.tappedEntityGroup
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
  horizontal_slide_position?: number
  module_height?: "single" | "double"
  type: "button" | "thumbnail" | "header" | "stub"
}
