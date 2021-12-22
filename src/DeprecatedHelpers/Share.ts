import { ActionType, Share } from "../Schema"

/**
 * A user clicks or taps the 'Share' button.
 *
 *  @example
 *  ```
 *  share({
 *    context_module: "artworkImage",
 *    context_owner_type: "artwork",
 *    context_owner_id: "55ed8ca57261693d930000b8"
 *    service: "instagram_stories"
 *  }
 * ```
 */
export const share = ({
  context_module,
  context_owner_type,
  context_owner_id,
  context_owner_slug,
  service,
}: Omit<Share, "action">): Share => ({
  action: ActionType.share,
  context_module,
  context_owner_id,
  context_owner_slug,
  context_owner_type,
  service,
})
