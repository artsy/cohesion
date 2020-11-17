import { ActionType, ClickedArticleGroup, ContextModule } from "../../Schema"

export const clickedArticleGroup = (
  props: Omit<ClickedArticleGroup, "action" | "type">,
): ClickedArticleGroup => {
  return {
    action: ActionType.clickedArticleGroup,
    context_module: ContextModule.relatedArticles,
    context_page_owner_type: props.context_page_owner_type,
    destination_page_owner_id: props.destination_page_owner_id,
    destination_page_owner_slug: props.destination_page_owner_slug,
    destination_page_owner_type: props.destination_page_owner_type,
    type: "thumbnail",
  }
}
