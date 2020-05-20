import {
  ContextModule,
  ActionType,
  ScreenOwnerType,
  TappedConsign,
  OwnerType,
} from "../../Schema"

export interface TappedConsignArgs {
  contextModule: ContextModule
  contextScreenOwnerType: ScreenOwnerType
  subject: string
}

/**
 *  A user taps a CTA to consign on iOS
 *
 * @example
 * ```
 * tappedConsign({
 *   contextModule: ContextModule.sellHeader,
 *   contextScreenOwnerType: OwnerType.sell,
 *   subject: "Start selling"
 * })
 * ```
 */
export const tappedConsign = ({
  contextModule,
  contextScreenOwnerType,
  subject,
}: TappedConsignArgs): TappedConsign => {
  return {
    action: ActionType.tappedConsign,
    context_module: contextModule,
    context_screen_owner_type: contextScreenOwnerType,
    destination_screen_owner_type: OwnerType.consignmentSubmission,
    subject,
  }
}
