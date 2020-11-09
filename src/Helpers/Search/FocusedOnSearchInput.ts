import { ActionType } from "../../Schema"
import { FocusedOnSearchInput } from "../../Schema/Events/Search"

export const focusedOnSearchInput = (
  props: Omit<FocusedOnSearchInput, "action">,
): FocusedOnSearchInput => {
  return {
    action: ActionType.focusedOnSearchInput,
    context_module: props.context_module,
    context_owner_id: props.context_owner_id,
    context_owner_slug: props.context_owner_slug,
    context_owner_type: props.context_owner_type,
  }
}
