import { ActionType } from "../../Schema"
import { SelectedItemFromSearch } from "../../Schema/Events/Search"

export const selectedItemFromSearch = (
  props: Omit<SelectedItemFromSearch, "action">,
): SelectedItemFromSearch => {
  return {
    action: ActionType.selectedItemFromSearch,
    context_module: props.context_module,
    context_owner_id: props.context_owner_id,
    context_owner_slug: props.context_owner_slug,
    context_owner_type: props.context_owner_type,
    destination_owner_id: props.destination_owner_id,
    destination_owner_slug: props.destination_owner_slug,
    destination_owner_type: props.destination_owner_type,
    owner_id: props.owner_id,
    owner_slug: props.owner_slug,
    owner_type: props.owner_type,
    query: props.query,
  }
}
