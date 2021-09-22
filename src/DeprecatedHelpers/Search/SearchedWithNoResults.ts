import { ActionType } from "../../Schema"
import { SearchedWithNoResults } from "../../Schema/Events/Search"

export const searchedWithNoResults = (
  props: Omit<SearchedWithNoResults, "action">,
): SearchedWithNoResults => {
  return {
    action: ActionType.searchedWithNoResults,
    context_module: props.context_module,
    context_owner_id: props.context_owner_id,
    context_owner_slug: props.context_owner_slug,
    context_owner_type: props.context_owner_type,
    destination_owner_type: props.destination_owner_type,
    query: props.query,
  }
}
