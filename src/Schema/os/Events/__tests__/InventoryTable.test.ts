import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { OsActionType } from "../index"
import {
  OsAddedGeneratedArtworkDescription,
  OsClickedEditArtworkButton,
  OsClickedWritingAssistant,
  OsEditedArtworkField,
  OsReorderedInventoryTableColumns,
} from "../InventoryTable"

describe("Inventory Table events", () => {
  it("OsClickedEditArtworkButton serializes to the expected shape", () => {
    const event: OsClickedEditArtworkButton = {
      action: OsActionType.clickedEditArtworkButton,
      artwork_id: "abc123",
      context_module: OsContextModule.artworkEditDrawer,
      context_page_owner_type: OsOwnerType.inventory,
    }

    expect(event).toEqual({
      action: "clickedEditArtworkButton",
      artwork_id: "abc123",
      context_module: "artworkEditDrawer",
      context_page_owner_type: "inventory",
    })
  })

  it("OsEditedArtworkField accepts the Edit Artwork drawer as a context_module", () => {
    const event: OsEditedArtworkField = {
      action: OsActionType.editedArtworkField,
      artwork_id: "abc123",
      context_module: OsContextModule.artworkEditDrawer,
      context_page_owner_type: OsOwnerType.inventory,
      field: "title",
      new_value: "Blue",
      old_value: "Untitled",
    }

    expect(event).toEqual({
      action: "editedArtworkField",
      artwork_id: "abc123",
      context_module: "artworkEditDrawer",
      context_page_owner_type: "inventory",
      field: "title",
      new_value: "Blue",
      old_value: "Untitled",
    })
  })

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

  it("OsClickedWritingAssistant serializes to the expected shape", () => {
    const event: OsClickedWritingAssistant = {
      action: OsActionType.clickedWritingAssistant,
      artwork_id: "abc123",
      context_module: OsContextModule.artworkTable,
      context_page_owner_type: OsOwnerType.inventory,
    }

    expect(event).toEqual({
      action: "clickedWritingAssistant",
      artwork_id: "abc123",
      context_module: "artworkTable",
      context_page_owner_type: "inventory",
    })
  })

  it("OsAddedGeneratedArtworkDescription serializes to the expected shape", () => {
    const event: OsAddedGeneratedArtworkDescription = {
      action: OsActionType.addedGeneratedArtworkDescription,
      artwork_id: "abc123",
      context_module: OsContextModule.writingAssistantDrawer,
      context_page_owner_type: OsOwnerType.inventory,
      document_count: 1,
      regenerate_count: 2,
      was_edited: true,
    }

    expect(event).toEqual({
      action: "addedGeneratedArtworkDescription",
      artwork_id: "abc123",
      context_module: "writingAssistantDrawer",
      context_page_owner_type: "inventory",
      document_count: 1,
      regenerate_count: 2,
      was_edited: true,
    })
  })
})
