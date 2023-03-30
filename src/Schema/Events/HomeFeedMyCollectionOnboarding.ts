import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * A user taps "Explore My Collection" (onboarding flow) on the "Do more on Artsy".
 *
 * This schema describes events sent to Segment from {@link ActionType.tappedExploreMyCollection}
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedExploreMyCollection",
 *    context_screen: "home",
 *    context_screen_owner_type: "home"
 *    context_module: "doMoreOnArtsy",
 *    destination_screen_owner_type: "myCollectionOnboarding",
 *  }
 * ```
 */
export interface TappedExploreMyCollection {
  action: ActionType.tappedExploreMyCollection
  context_screen: OwnerType.home
  context_screen_owner_type: OwnerType.home
  context_module: ContextModule.doMoreOnArtsy
  destination_screen_owner_type: OwnerType.myCollectionOnboarding
}

/**
 * A user completed onboarding (=reached the last screen).
 *
 * This schema describes events sent to Segment from {@link ActionType.myCollectionOnboardingCompleted}
 *
 *  @example
 *  ```
 *  {
 *    action: "myCollectionOnboardingCompleted",
 *    context_owner_type: "myCollectionOnboarding"
 *    context_screen_owner_type: "myCollectionOnboarding"
 *    context_module: "myCollectionOnboarding",
 *    destination_screen_owner_type: "myCollectionOnboarding",
 *    user_id: "5bd8b675776bd6002c86526c"
 *  }
 * ```
 */
export interface MyCollectionOnboardingCompleted {
  action: ActionType.myCollectionOnboardingCompleted
  context_owner_type: OwnerType.myCollectionOnboarding
  context_screen_owner_type: OwnerType.myCollectionOnboarding
  context_module: ContextModule.myCollectionOnboarding
  destination_screen_owner_type: OwnerType.myCollectionOnboarding
  user_id: string
}

/**
 * A user taps "Go to My Collection" on the flow's third screen.
 *
 * This schema describes events sent to Segment from {@link ActionType.visitMyCollection}
 *
 *  @example
 *  ```
 *  {
 *    action: "visitMyCollection",
 *    context_screen_owner_type: "myCollectionOnboarding"
 *    context_module: "myCollectionOnboarding",
 *  }
 * ```
 */
export interface VisitMyCollection {
  action: ActionType.visitMyCollection
  context_screen_owner_type: OwnerType.myCollectionOnboarding
  context_module: ContextModule.myCollectionOnboarding
}

/**
 * A user goes to the next onboarding screen.
 *
 * This schema describes events sent to Segment from {@link ActionType.visitMyCollectionOnboardingSlide}
 *
 *  @example
 *  ```
 *  {
 *    action: "visitMyCollectionOnboardingSlide",
 *    context_screen_owner_type: "myCollectionOnboarding"
 *    context_module: "myCollectionOnboarding",
 *    index: 1
 *  }
 * ```
 */
export interface VisitMyCollectionOnboardingSlide {
  action: ActionType.visitMyCollectionOnboardingSlide
  context_screen_owner_type: OwnerType.myCollectionOnboarding
  context_module: ContextModule.myCollectionOnboarding
  index: number
}
