import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

export interface Impression {
  action: ActionType.impression
  context_module: ContextModule
  context_owner_id: string
  context_owner_slug: string
  context_owner_type: OwnerType
}
