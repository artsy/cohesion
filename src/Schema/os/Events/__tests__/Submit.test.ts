import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { OsActionType } from "../index"
import {
  BulkEditedArtworks,
  DeletedArtwork,
  DistributedArtworks,
} from "../Submit"

describe("Bulk-action submit events", () => {
  it("BulkEditedArtworks serializes to the expected shape", () => {
    const event: BulkEditedArtworks = {
      action: OsActionType.bulkEditedArtworks,
      artwork_count: 30,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"],
      context_module: OsContextModule.bulkEditDrawer,
      context_page_owner_type: OsOwnerType.inventory,
      labels: ["availability", "price"],
      values: ["for sale", "USD 1000"],
    }

    expect(event).toEqual({
      action: "bulkEditedArtworks",
      artwork_count: 30,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"],
      context_module: "bulkEditDrawer",
      context_page_owner_type: "inventory",
      labels: ["availability", "price"],
      values: ["for sale", "USD 1000"],
    })
  })

  it("DeletedArtwork serializes to the expected shape", () => {
    const event: DeletedArtwork = {
      action: OsActionType.deletedArtwork,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"],
      context_module: OsContextModule.deleteModal,
      context_page_owner_type: OsOwnerType.inventory,
      value: "confirm",
    }

    expect(event).toEqual({
      action: "deletedArtwork",
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"],
      context_module: "deleteModal",
      context_page_owner_type: "inventory",
      value: "confirm",
    })
  })

  it("DistributedArtworks serializes to the expected shape", () => {
    const event: DistributedArtworks = {
      action: OsActionType.distributedArtworks,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d", "5d2b5b5d5e5b5d000e1b5b5e"],
      context_module: OsContextModule.distributeModal,
      context_page_owner_type: OsOwnerType.inventory,
      destination: ["artsy"],
      selected_count: 2,
      value: "confirm",
    }

    expect(event).toEqual({
      action: "distributedArtworks",
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d", "5d2b5b5d5e5b5d000e1b5b5e"],
      context_module: "distributeModal",
      context_page_owner_type: "inventory",
      destination: ["artsy"],
      selected_count: 2,
      value: "confirm",
    })
  })
})
