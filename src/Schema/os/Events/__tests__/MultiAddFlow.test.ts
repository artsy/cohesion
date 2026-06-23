import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { OsActionType } from "../index"
import {
  CancelledArtworkImport,
  ClickedAddFromFile,
  ClickedExitDropZone,
  CompletedArtworkImport,
  CreatedImportedArtworks,
  EditedArtworkField,
  ResumedArtworkImport,
  StartedArtworkImport,
} from "../MultiAddFlow"

describe("Multi-Add flow events", () => {
  it("ClickedAddFromFile serializes to the expected shape", () => {
    const event: ClickedAddFromFile = {
      action: OsActionType.clickedAddFromFile,
      context_module: OsContextModule.multiAdd,
      context_page_owner_type: OsOwnerType.inventory,
    }

    expect(event).toEqual({
      action: "clickedAddFromFile",
      context_module: "multiAdd",
      context_page_owner_type: "inventory",
    })
  })

  it("ClickedExitDropZone serializes to the expected shape", () => {
    const event: ClickedExitDropZone = {
      action: OsActionType.clickedExitDropZone,
      context_module: OsContextModule.multiAdd,
      context_page_owner_type: OsOwnerType.inventory,
    }

    expect(event).toEqual({
      action: "clickedExitDropZone",
      context_module: "multiAdd",
      context_page_owner_type: "inventory",
    })
  })

  it("StartedArtworkImport serializes to the expected shape", () => {
    const event: StartedArtworkImport = {
      action: OsActionType.startedArtworkImport,
      context_module: OsContextModule.multiAdd,
      context_page_owner_type: OsOwnerType.inventory,
      file_type: "application/pdf",
    }

    expect(event).toEqual({
      action: "startedArtworkImport",
      context_module: "multiAdd",
      context_page_owner_type: "inventory",
      file_type: "application/pdf",
    })
  })

  it("CreatedImportedArtworks serializes to the expected shape", () => {
    const event: CreatedImportedArtworks = {
      action: OsActionType.createdImportedArtworks,
      artwork_import_id: "67b646ecbe87376bfeb3f962",
      context_module: OsContextModule.multiAddReview,
      context_page_owner_type: OsOwnerType.inventory,
      row_count: 14,
      selected_count: 12,
    }

    expect(event).toEqual({
      action: "createdImportedArtworks",
      artwork_import_id: "67b646ecbe87376bfeb3f962",
      context_module: "multiAddReview",
      context_page_owner_type: "inventory",
      row_count: 14,
      selected_count: 12,
    })
  })

  it("CancelledArtworkImport serializes to the expected shape", () => {
    const event: CancelledArtworkImport = {
      action: OsActionType.cancelledArtworkImport,
      artwork_import_id: "67b646ecbe87376bfeb3f962",
      context_module: OsContextModule.multiAddReview,
      context_page_owner_type: OsOwnerType.inventory,
    }

    expect(event).toEqual({
      action: "cancelledArtworkImport",
      artwork_import_id: "67b646ecbe87376bfeb3f962",
      context_module: "multiAddReview",
      context_page_owner_type: "inventory",
    })
  })

  it("ResumedArtworkImport serializes to the expected shape", () => {
    const event: ResumedArtworkImport = {
      action: OsActionType.resumedArtworkImport,
      artwork_import_id: "67b646ecbe87376bfeb3f962",
      context_module: OsContextModule.multiAdd,
      context_page_owner_type: OsOwnerType.inventory,
    }

    expect(event).toEqual({
      action: "resumedArtworkImport",
      artwork_import_id: "67b646ecbe87376bfeb3f962",
      context_module: "multiAdd",
      context_page_owner_type: "inventory",
    })
  })

  it("CompletedArtworkImport serializes to the expected shape", () => {
    const event: CompletedArtworkImport = {
      action: OsActionType.completedArtworkImport,
      artwork_import_id: "67b646ecbe87376bfeb3f962",
      context_module: OsContextModule.multiAdd,
      context_page_owner_type: OsOwnerType.inventory,
    }

    expect(event).toEqual({
      action: "completedArtworkImport",
      artwork_import_id: "67b646ecbe87376bfeb3f962",
      context_module: "multiAdd",
      context_page_owner_type: "inventory",
    })
  })

  it("EditedArtworkField serializes to the expected shape", () => {
    const event: EditedArtworkField = {
      action: OsActionType.editedArtworkField,
      artwork_import_id: "67b646ecbe87376bfeb3f962",
      context_module: OsContextModule.multiAddReview,
      context_page_owner_type: OsOwnerType.inventory,
      field: "title",
      import_row_id: "a1b2c3d4",
      new_value: "Untitled",
      old_value: "Untitld",
    }

    expect(event).toEqual({
      action: "editedArtworkField",
      artwork_import_id: "67b646ecbe87376bfeb3f962",
      context_module: "multiAddReview",
      context_page_owner_type: "inventory",
      field: "title",
      import_row_id: "a1b2c3d4",
      new_value: "Untitled",
      old_value: "Untitld",
    })
  })
})
