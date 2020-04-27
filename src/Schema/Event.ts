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
 * A user taps a grouping of artists on iOS
 *
 * This schema describes events sent to Segment from [[tappedArtistGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedArtistGroup"
 *    context_module: "trendingArtistsRail"
 *    context_screen_owner_type: Home
 *    destination_screen_owner_type: Artist
 *    destination_screen_owner_id: "5359794d1a1e86c3740001f7"
 *    destination_screen_owner_slug: "anthony-hunter"
 *    horizontal_slide_position: 1
 *    module_height: "double"
 *    type: "stub"
 *  }
 * ```
 */
export interface TappedArtistGroup {
  action: ActionType.tappedArtistGroup
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
  horizontal_slide_position?: number
  module_height?: "single" | "double"
  type?: "thumbnail" | "header" | "stub"
}

/**
 * A user taps a grouping of artworks on iOS
 *
 * This schema describes events sent to Segment from [[tappedArtworkGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedArtworkGroup"
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
export interface TappedArtworkGroup {
  action: ActionType.tappedArtworkGroup
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
  horizontal_slide_position?: number
  module_height?: "single" | "double"
  type?: "thumbnail" | "header" | "stub"
}

/**
 * A user taps a grouping of auctions on iOS
 *
 * This schema describes events sent to Segment from [[tappedAuctionGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedAuctionGroup"
 *    context_module: "auctionsRail"
 *    context_screen_owner_type: Home
 *    destination_screen_owner_type: Sale
 *    destination_screen_owner_id: "5e95b37a2fdcb20012a0e082"
 *    destination_screen_owner_slug: "forum-auctions-colour-theory-4"
 *    horizontal_slide_position: 3
 *    module_height: "double"
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedAuctionGroup {
  action: ActionType.tappedAuctionGroup
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
  horizontal_slide_position?: number
  module_height?: "single" | "double"
  type?: "thumbnail" | "header" | "stub"
}

/**
 * A user taps a grouping of collections on iOS
 *
 * This schema describes events sent to Segment from [[tappedCollectionGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedCollectionGroup"
 *    context_module: "collectionRail"
 *    context_screen_owner_type: Home
 *    destination_screen_owner_type: Collection
 *    destination_screen_owner_slug: "limited-edition-prints-trending-artists"
 *    horizontal_slide_position: 2
 *    module_height: "double"
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedCollectionGroup {
  action: ActionType.tappedCollectionGroup
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
  horizontal_slide_position?: number
  module_height?: "single" | "double"
  type?: "thumbnail" | "header" | "stub"
}

/**
 * A user taps a grouped explore module (City Guide, for example)
 *
 * This schema describes events sent to Segment from [[tappedExploreGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedExploreGroup"
 *    context_module: "cityGuideCard"
 *    context_screen_owner_type: Search
 *    destination_screen_owner_type: CityGuideGuide
 *    module_height: "double"
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedExploreGroup {
  action: ActionType.tappedExploreGroup
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
  horizontal_slide_position?: number
  module_height?: "single" | "double"
  type?: "thumbnail" | "header" | "stub"
}

/**
 * A user taps a grouping of fairs on iOS
 *
 * This schema describes events sent to Segment from [[tappedFairGroup]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedFairGroup"
 *    context_module: "fairRail"
 *    context_screen_owner_type: Home
 *    destination_screen_owner_type: Fair
 *    destination_screen_owner_id: "5e726bd22524980012caafb0"
 *    destination_screen_owner_slug: "arteba-special-edition"
 *    horizontal_slide_position: 2
 *    module_height: "double"
 *    type: "thumbnail"
 *  }
 * ```
 */
export interface TappedFairGroup {
  action: ActionType.tappedFairGroup
  context_module: ContextModule
  context_screen_owner_type: ScreenOwnerType
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  destination_screen_owner_type: ScreenOwnerType
  destination_screen_owner_id?: string
  destination_screen_owner_slug?: string
  horizontal_slide_position?: number
  module_height?: "single" | "double"
  type?: "thumbnail" | "header" | "stub"
}
