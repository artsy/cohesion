import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { OsActionType } from "../index"
import {
  AddedArtworksToList,
  BulkEditedArtworks,
  CreatedList,
  DeletedArtwork,
  DeletedList,
  DistributedArtworks,
  DistributedList,
  MovedArtworksBetweenLists,
  RemovedArtworksFromList,
  UpdatedList,
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

describe("List submit events", () => {
  it("CreatedList serializes to the expected shape", () => {
    const event: CreatedList = {
      action: OsActionType.createdList,
      artwork_count: 12,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"],
      context_module: OsContextModule.addToListModal,
      context_page_owner_type: OsOwnerType.inventory,
      end_date: "2026-09-30",
      list_type: "SHOW",
      start_date: "2026-09-01",
    }

    expect(event).toEqual({
      action: "createdList",
      artwork_count: 12,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5d"],
      context_module: "addToListModal",
      context_page_owner_type: "inventory",
      end_date: "2026-09-30",
      list_type: "SHOW",
      start_date: "2026-09-01",
    })
  })

  it("AddedArtworksToList serializes to the expected shape", () => {
    const event: AddedArtworksToList = {
      action: OsActionType.addedArtworksToList,
      artwork_count: 12,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5e"],
      context_module: OsContextModule.addToListModal,
      context_page_owner_type: OsOwnerType.inventory,
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
    }

    expect(event).toEqual({
      action: "addedArtworksToList",
      artwork_count: 12,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5e"],
      context_module: "addToListModal",
      context_page_owner_type: "inventory",
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
    })
  })

  it("UpdatedList serializes to the expected shape", () => {
    const event: UpdatedList = {
      action: OsActionType.updatedList,
      context_module: OsContextModule.listDetail,
      context_page_owner_type: OsOwnerType.collection,
      field: "name",
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      new_value: "Summer Show 2026",
      old_value: "Summer Show",
    }

    expect(event).toEqual({
      action: "updatedList",
      context_module: "listDetail",
      context_page_owner_type: "collection",
      field: "name",
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      new_value: "Summer Show 2026",
      old_value: "Summer Show",
    })
  })

  it("DeletedList serializes to the expected shape", () => {
    const event: DeletedList = {
      action: OsActionType.deletedList,
      context_module: OsContextModule.listCard,
      context_page_owner_type: OsOwnerType.collection,
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      trigger: "listPage",
    }

    expect(event).toEqual({
      action: "deletedList",
      context_module: "listCard",
      context_page_owner_type: "collection",
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      trigger: "listPage",
    })
  })

  it("RemovedArtworksFromList serializes to the expected shape", () => {
    const event: RemovedArtworksFromList = {
      action: OsActionType.removedArtworksFromList,
      artwork_count: 5,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5e"],
      context_module: OsContextModule.listDetail,
      context_page_owner_type: OsOwnerType.collection,
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
    }

    expect(event).toEqual({
      action: "removedArtworksFromList",
      artwork_count: 5,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5e"],
      context_module: "listDetail",
      context_page_owner_type: "collection",
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
    })
  })

  it("MovedArtworksBetweenLists serializes to the expected shape", () => {
    const event: MovedArtworksBetweenLists = {
      action: OsActionType.movedArtworksBetweenLists,
      artwork_count: 5,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5f"],
      context_module: OsContextModule.listDetail,
      context_page_owner_type: OsOwnerType.collection,
      destination_list_id: "5d2b5b5d5e5b5d000e1b5b5e",
      source_list_id: "5d2b5b5d5e5b5d000e1b5b5d",
    }

    expect(event).toEqual({
      action: "movedArtworksBetweenLists",
      artwork_count: 5,
      artwork_ids: ["5d2b5b5d5e5b5d000e1b5b5f"],
      context_module: "listDetail",
      context_page_owner_type: "collection",
      destination_list_id: "5d2b5b5d5e5b5d000e1b5b5e",
      source_list_id: "5d2b5b5d5e5b5d000e1b5b5d",
    })
  })

  it("DistributedList serializes to the expected shape", () => {
    const event: DistributedList = {
      action: OsActionType.distributedList,
      context_module: OsContextModule.listDetail,
      context_page_owner_type: OsOwnerType.collection,
      destination: ["artsy"],
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      list_type: "SHOW",
      partner_show_id: "5d2b5b5d5e5b5d000e1b5b5e",
    }

    expect(event).toEqual({
      action: "distributedList",
      context_module: "listDetail",
      context_page_owner_type: "collection",
      destination: ["artsy"],
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      list_type: "SHOW",
      partner_show_id: "5d2b5b5d5e5b5d000e1b5b5e",
    })
  })
})
