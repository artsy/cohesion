import { ActionType, ClickedShowMore } from "../../Schema"

/**
 * A user clicks a show more button on web.
 *
 *  @example
 *  ```
 *  clickedShowMore({
 *    context_module: "exhibitorsTab",
 *    context_page_owner_type: "fair",
 *    context_page_owner_id: "5e726bd22524980012caafb0",
 *    context_page_owner_slug: "arteba-special-edition",
 *    subject: "Show More"
 *  })
 * ```
 */
export const clickedShowMore = (
  props: Omit<ClickedShowMore, "action">,
): ClickedShowMore => {
  return {
    action: ActionType.clickedShowMore,
    ...props,
  }
}
