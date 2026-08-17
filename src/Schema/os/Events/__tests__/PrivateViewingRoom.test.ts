import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { OsActionType } from "../index"
import {
  ClickedSharePrivateViewingRoom,
  SharedPrivateViewingRoom,
  StoppedSharingPrivateViewingRoom,
} from "../PrivateViewingRoom"

describe("Private viewing room events", () => {
  it("ClickedSharePrivateViewingRoom serializes to the expected shape", () => {
    const event: ClickedSharePrivateViewingRoom = {
      action: OsActionType.clickedSharePrivateViewingRoom,
      context_module: OsContextModule.listDetail,
      context_page_owner_type: OsOwnerType.privateViewingRoom,
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      trigger: "shareButton",
      value: "share",
    }

    expect(event).toEqual({
      action: "clickedSharePrivateViewingRoom",
      context_module: "listDetail",
      context_page_owner_type: "privateViewingRoom",
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      trigger: "shareButton",
      value: "share",
    })
  })

  it("ClickedSharePrivateViewingRoom distinguishes the stale-room banner", () => {
    const event: ClickedSharePrivateViewingRoom = {
      action: OsActionType.clickedSharePrivateViewingRoom,
      context_module: OsContextModule.listDetail,
      context_page_owner_type: OsOwnerType.privateViewingRoom,
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      trigger: "updateBanner",
      value: "update",
    }

    expect(event).toEqual({
      action: "clickedSharePrivateViewingRoom",
      context_module: "listDetail",
      context_page_owner_type: "privateViewingRoom",
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      trigger: "updateBanner",
      value: "update",
    })
  })

  it("SharedPrivateViewingRoom serializes a first share to the expected shape", () => {
    const event: SharedPrivateViewingRoom = {
      action: OsActionType.sharedPrivateViewingRoom,
      artwork_count: 12,
      brand_kit: true,
      content: {
        artworkFields: ["artistName", "artworkTitle", "year", "medium"],
        hasDescription: false,
        hasHeading: true,
        showGalleryName: true,
      },
      context_module: OsContextModule.privateViewingRoomEditor,
      context_page_owner_type: OsOwnerType.privateViewingRoom,
      has_passcode: true,
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      value: "shared",
    }

    expect(event).toEqual({
      action: "sharedPrivateViewingRoom",
      artwork_count: 12,
      brand_kit: true,
      content: {
        artworkFields: ["artistName", "artworkTitle", "year", "medium"],
        hasDescription: false,
        hasHeading: true,
        showGalleryName: true,
      },
      context_module: "privateViewingRoomEditor",
      context_page_owner_type: "privateViewingRoom",
      has_passcode: true,
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      value: "shared",
    })
  })

  it("SharedPrivateViewingRoom reports an unprotected room as has_passcode: false", () => {
    const event: SharedPrivateViewingRoom = {
      action: OsActionType.sharedPrivateViewingRoom,
      artwork_count: 3,
      brand_kit: false,
      content: {
        artworkFields: [],
        hasDescription: false,
        hasHeading: false,
        showGalleryName: false,
      },
      context_module: OsContextModule.privateViewingRoomEditor,
      context_page_owner_type: OsOwnerType.privateViewingRoom,
      has_passcode: false,
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      value: "updated",
    }

    expect(event.has_passcode).toEqual(false)
    expect(event.value).toEqual("updated")
  })

  it("StoppedSharingPrivateViewingRoom serializes to the expected shape", () => {
    const event: StoppedSharingPrivateViewingRoom = {
      action: OsActionType.stoppedSharingPrivateViewingRoom,
      context_module: OsContextModule.listDetail,
      context_page_owner_type: OsOwnerType.privateViewingRoom,
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      trigger: "manageMenu",
    }

    expect(event).toEqual({
      action: "stoppedSharingPrivateViewingRoom",
      context_module: "listDetail",
      context_page_owner_type: "privateViewingRoom",
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      trigger: "manageMenu",
    })
  })

  it("StoppedSharingPrivateViewingRoom distinguishes the editor footer", () => {
    const event: StoppedSharingPrivateViewingRoom = {
      action: OsActionType.stoppedSharingPrivateViewingRoom,
      context_module: OsContextModule.listDetail,
      context_page_owner_type: OsOwnerType.privateViewingRoom,
      list_id: "5d2b5b5d5e5b5d000e1b5b5d",
      trigger: "editor",
    }

    expect(event.trigger).toEqual("editor")
  })
})
