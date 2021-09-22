import { ActionType, ClickedAppDownload } from "../../Schema"

export const clickedAppDownload = (
  props: Omit<ClickedAppDownload, "action">,
): ClickedAppDownload => {
  return {
    action: ActionType.clickedAppDownload,
    context_module: props.context_module,
    context_page_owner_id: props.context_page_owner_id,
    context_page_owner_slug: props.context_page_owner_slug,
    context_page_owner_type: props.context_page_owner_type,
    destination_path: props.destination_path,
    subject: props.subject,
  }
}
