import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { OsActionType } from "../index"
import { EditedInventoryField } from "../InventoryTable"
import { CompletedArtworkDistribution } from "../Submit"
import { ToggledDistributionSync } from "../Toggle"

describe("Distribution Sync & Mapping flow events", () => {
  it("ToggledDistributionSync serializes to the expected shape", () => {
    const event: ToggledDistributionSync = {
      action: OsActionType.toggledDistributionSync,
      context_module: OsContextModule.tableActions,
      context_page_owner_type: OsOwnerType.inventory,
      value: "on",
    }

    expect(event).toEqual({
      action: "toggledDistributionSync",
      context_module: "tableActions",
      context_page_owner_type: "inventory",
      value: "on",
    })
  })

  it("EditedInventoryField serializes to the expected shape", () => {
    const event: EditedInventoryField = {
      action: OsActionType.editedInventoryField,
      artwork_id: "abc123",
      context_module: OsContextModule.artworkTable,
      context_page_owner_type: OsOwnerType.inventory,
      destination: ["artsy"],
      did_push_to_cms: false,
      field: "availability",
    }

    expect(event).toEqual({
      action: "editedInventoryField",
      artwork_id: "abc123",
      context_module: "artworkTable",
      context_page_owner_type: "inventory",
      destination: ["artsy"],
      did_push_to_cms: false,
      field: "availability",
    })
  })

  it("EditedInventoryField includes edition_set_id when editing an edition set row", () => {
    const event: EditedInventoryField = {
      action: OsActionType.editedInventoryField,
      artwork_id: "abc123",
      context_module: OsContextModule.artworkTable,
      context_page_owner_type: OsOwnerType.inventory,
      destination: ["artsy"],
      did_push_to_cms: true,
      edition_set_id: "xyz789",
      field: "price",
    }

    expect(event).toEqual({
      action: "editedInventoryField",
      artwork_id: "abc123",
      context_module: "artworkTable",
      context_page_owner_type: "inventory",
      destination: ["artsy"],
      did_push_to_cms: true,
      edition_set_id: "xyz789",
      field: "price",
    })
  })

  it("CompletedArtworkDistribution serializes to the expected shape", () => {
    const event: CompletedArtworkDistribution = {
      action: OsActionType.completedArtworkDistribution,
      context_module: OsContextModule.artworkTable,
      context_page_owner_type: OsOwnerType.inventory,
      destination: ["artsy"],
      skipped_count: 2,
      success_count: 10,
      total_artworks: 12,
      value: "partial",
    }

    expect(event).toEqual({
      action: "completedArtworkDistribution",
      context_module: "artworkTable",
      context_page_owner_type: "inventory",
      destination: ["artsy"],
      skipped_count: 2,
      success_count: 10,
      total_artworks: 12,
      value: "partial",
    })
  })
})
