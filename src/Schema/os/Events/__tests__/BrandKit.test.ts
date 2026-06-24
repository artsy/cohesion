import { ActionType } from "../../../Events"
import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import {
  ClickedAddBrandKitFile,
  ClickedBrandKitColor,
  ClickedBrandKitFont,
  ClickedSaveBrandKit,
} from "../BrandKit"

describe("Brand Kit events", () => {
  it("ClickedBrandKitColor serializes to the expected shape", () => {
    const event: ClickedBrandKitColor = {
      action: ActionType.clickedBrandKitColor,
      context_module: OsContextModule.brandKit,
      context_page_owner_type: OsOwnerType.studio,
      field: "text",
      value: "#9C9EEA",
    }

    expect(event).toEqual({
      action: "clickedBrandKitColor",
      context_module: "brandKit",
      context_page_owner_type: "studio",
      field: "text",
      value: "#9C9EEA",
    })
  })

  it("ClickedBrandKitFont serializes to the expected shape", () => {
    const event: ClickedBrandKitFont = {
      action: ActionType.clickedBrandKitFont,
      context_module: OsContextModule.brandKit,
      context_page_owner_type: OsOwnerType.studio,
      field: "font_family",
      value: "Courier",
    }

    expect(event).toEqual({
      action: "clickedBrandKitFont",
      context_module: "brandKit",
      context_page_owner_type: "studio",
      field: "font_family",
      value: "Courier",
    })
  })

  it("ClickedAddBrandKitFile serializes to the expected shape", () => {
    const event: ClickedAddBrandKitFile = {
      action: ActionType.clickedAddBrandKitFile,
      context_module: OsContextModule.brandKit,
      context_page_owner_type: OsOwnerType.studio,
      field: "file",
      label: "brand kit logo",
      value: "filename.png",
    }

    expect(event).toEqual({
      action: "clickedAddBrandKitFile",
      context_module: "brandKit",
      context_page_owner_type: "studio",
      field: "file",
      label: "brand kit logo",
      value: "filename.png",
    })
  })

  it("ClickedSaveBrandKit serializes to the expected shape", () => {
    const event: ClickedSaveBrandKit = {
      action: ActionType.clickedSaveBrandKit,
      context_module: OsContextModule.brandKit,
      context_page_owner_type: OsOwnerType.studio,
    }

    expect(event).toEqual({
      action: "clickedSaveBrandKit",
      context_module: "brandKit",
      context_page_owner_type: "studio",
    })
  })
})
