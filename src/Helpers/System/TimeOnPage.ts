import { ActionType, PageOwnerType, TimeOnPage } from "../../Schema"

export interface TimeOnPageArgs {
  contextPageOwnerId?: string
  contextPageOwnerSlug?: string
  contextPageOwnerType: PageOwnerType
}

/**
 * Action fired when a user views a page for 15 seconds
 *
 * @example
 *  ```
 *  timeOnPage({
 *    contextPageOwnerId: "4d8b92b34eb68a1b2c0003f4",
 *    contextPageOwnerSlug: "andy-warhol",
 *    contextPageOwnerType: OwnerType.artist,
 *  })
 * ```
 */
export const timeOnPage = ({
  contextPageOwnerId,
  contextPageOwnerSlug,
  contextPageOwnerType,
}: TimeOnPageArgs): TimeOnPage => {
  return {
    action: ActionType.timeOnPage,
    category: "15 seconds",
    context_page_owner_id: contextPageOwnerId,
    context_page_owner_slug: contextPageOwnerSlug,
    context_page_owner_type: contextPageOwnerType,
  }
}
