import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { ClickedActionsDropdown, ClickedCancelBulkEdit } from "../Click"
import { OsActionType } from "../index"

describe("Bulk-action click events", () => {
  it("ClickedActionsDropdown serializes to the expected shape", () => {
    const event: ClickedActionsDropdown = {
      action: OsActionType.clickedActionsDropdown,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"],
      context_module: OsContextModule.actionsDropdown,
      context_page_owner_type: OsOwnerType.inventory,
      label: "action button",
      value: "Add to Artsy (as Draft)",
    }

    expect(event).toEqual({
      action: "clickedActionsDropdown",
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"],
      context_module: "actionsDropdown",
      context_page_owner_type: "inventory",
      label: "action button",
      value: "Add to Artsy (as Draft)",
    })
  })

  it("ClickedCancelBulkEdit serializes to the expected shape", () => {
    const event: ClickedCancelBulkEdit = {
      action: OsActionType.clickedCancelBulkEdit,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d", "5d2b5b5d5e5b5d000e1b5b5e"],
      context_module: OsContextModule.bulkEditDrawer,
      context_page_owner_type: OsOwnerType.list,
    }

    expect(event).toEqual({
      action: "clickedCancelBulkEdit",
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d", "5d2b5b5d5e5b5d000e1b5b5e"],
      context_module: "bulkEditDrawer",
      context_page_owner_type: "list",
    })
  })
})
