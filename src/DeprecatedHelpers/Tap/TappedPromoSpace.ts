import {
  ActionType,
  ContextModule,
  OwnerType,
  TappedPromoSpace,
} from "../../Schema"

export interface TappedPromoSpaceArgs {
  path: string
  subject: string
}

/**
 * A user taps a promo space on the home page of the app
 *
 * subject is the text of the tapped promo space
 *
 * @example
 * ```
 * tappedPromoSpace({
 *   path: "/collection/a-collection-id",
 *   subject: "Check out this sweet collection!"
 * })
 * ```
 */
export const tappedPromoSpace = ({
  path,
  subject,
}: TappedPromoSpaceArgs): TappedPromoSpace => {
  return {
    action: ActionType.tappedPromoSpace,
    context_module: ContextModule.promoSpace,
    context_screen_owner_type: OwnerType.home,
    destination_path: path,
    subject,
  }
}
