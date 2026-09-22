import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { OsActionType } from "../index"
import {
  OsAddedGeneratedArtworkDescription,
  OsClickedEditArtworkButton,
  OsClickedWritingAssistant,
  OsClosedWritingAssistant,
  OsEditedArtworkField,
  OsRatedGeneratedArtworkDescription,
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
      generated_description: "A vibrant abstract composition...",
      regenerate_count: 2,
      was_edited: true,
    }

    expect(event).toEqual({
      action: "addedGeneratedArtworkDescription",
      artwork_id: "abc123",
      context_module: "writingAssistantDrawer",
      context_page_owner_type: "inventory",
      document_count: 1,
      generated_description: "A vibrant abstract composition...",
      regenerate_count: 2,
      was_edited: true,
    })
  })

  it("OsClosedWritingAssistant serializes to the expected shape", () => {
    const event: OsClosedWritingAssistant = {
      action: OsActionType.closedWritingAssistant,
      artwork_id: "abc123",
      context_module: OsContextModule.writingAssistantDrawer,
      context_page_owner_type: OsOwnerType.inventory,
      document_count: 1,
      generated_description: "A vibrant abstract composition...",
      regenerate_count: 2,
      value: "cancel",
      was_edited: true,
    }

    expect(event).toEqual({
      action: "closedWritingAssistant",
      artwork_id: "abc123",
      context_module: "writingAssistantDrawer",
      context_page_owner_type: "inventory",
      document_count: 1,
      generated_description: "A vibrant abstract composition...",
      regenerate_count: 2,
      value: "cancel",
      was_edited: true,
    })
  })

  it("OsRatedGeneratedArtworkDescription serializes to the expected shape", () => {
    const event: OsRatedGeneratedArtworkDescription = {
      action: OsActionType.ratedGeneratedArtworkDescription,
      artwork_id: "abc123",
      context_module: OsContextModule.writingAssistantDrawer,
      context_page_owner_type: OsOwnerType.inventory,
      detail: "",
      document_count: 1,
      generated_description: "A vibrant abstract composition...",
      regenerate_count: 2,
      value: "up",
      was_edited: false,
    }

    expect(event).toEqual({
      action: "ratedGeneratedArtworkDescription",
      artwork_id: "abc123",
      context_module: "writingAssistantDrawer",
      context_page_owner_type: "inventory",
      detail: "",
      document_count: 1,
      generated_description: "A vibrant abstract composition...",
      regenerate_count: 2,
      value: "up",
      was_edited: false,
    })
  })

  it("OsRatedGeneratedArtworkDescription serializes with an optional detail", () => {
    const event: OsRatedGeneratedArtworkDescription = {
      action: OsActionType.ratedGeneratedArtworkDescription,
      artwork_id: "abc123",
      context_module: OsContextModule.writingAssistantDrawer,
      context_page_owner_type: OsOwnerType.inventory,
      detail: "Too generic, didn't mention the material",
      document_count: 0,
      generated_description: "A vibrant abstract composition...",
      regenerate_count: 0,
      value: "down",
      was_edited: false,
    }

    expect(event).toEqual({
      action: "ratedGeneratedArtworkDescription",
      artwork_id: "abc123",
      context_module: "writingAssistantDrawer",
      context_page_owner_type: "inventory",
      detail: "Too generic, didn't mention the material",
      document_count: 0,
      generated_description: "A vibrant abstract composition...",
      regenerate_count: 0,
      value: "down",
      was_edited: false,
    })
  })
})
