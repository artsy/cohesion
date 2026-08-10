import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { OsActionType } from "../index"
import { OsReorderedInventoryTableColumns } from "../InventoryTable"

describe("Inventory Table events", () => {
  it("OsReorderedInventoryTableColumns serializes to the expected shape", () => {
    const event: OsReorderedInventoryTableColumns = {
      action: OsActionType.reorderedInventoryTableColumns,
      column: "price",
      context_module: OsContextModule.artworkTable,
      context_page_owner_type: OsOwnerType.inventory,
      from_index: 4,
      new_order: ["title", "price", "artist", "medium", "dimensions"],
      to_index: 1,
    }

    expect(event).toEqual({
      action: "reorderedInventoryTableColumns",
      column: "price",
      context_module: "artworkTable",
      context_page_owner_type: "inventory",
      from_index: 4,
      new_order: ["title", "price", "artist", "medium", "dimensions"],
      to_index: 1,
    })
  })
})
