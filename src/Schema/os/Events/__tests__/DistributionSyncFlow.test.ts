import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { ClickedDivergenceMarker, ViewedDivergenceMarker } from "../Click"
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

  it("ViewedDivergenceMarker serializes to the expected shape", () => {
    const event: ViewedDivergenceMarker = {
      action: OsActionType.viewedDivergenceMarker,
      artwork_id: "abc123",
      context_module: OsContextModule.artworkTable,
      context_page_owner_type: OsOwnerType.inventory,
      field: "availability",
    }

    expect(event).toEqual({
      action: "viewedDivergenceMarker",
      artwork_id: "abc123",
      context_module: "artworkTable",
      context_page_owner_type: "inventory",
      field: "availability",
    })
  })

  it("ClickedDivergenceMarker serializes to the expected shape", () => {
    const event: ClickedDivergenceMarker = {
      action: OsActionType.clickedDivergenceMarker,
      artwork_id: "abc123",
      context_module: OsContextModule.artworkTable,
      context_page_owner_type: OsOwnerType.inventory,
      field: "price",
    }

    expect(event).toEqual({
      action: "clickedDivergenceMarker",
      artwork_id: "abc123",
      context_module: "artworkTable",
      context_page_owner_type: "inventory",
      field: "price",
    })
  })
})
