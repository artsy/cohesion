import { ActionType } from "../../../Events"
import { OsContextModule } from "../../Values/OsContextModule"
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
      color_hex: "#FF5733",
      color_name: "Primary Red",
      context_module: OsContextModule.brandKit,
    }

    expect(event).toEqual({
      action: "clickedBrandKitColor",
      color_hex: "#FF5733",
      color_name: "Primary Red",
      context_module: "brandKit",
    })
  })

  it("ClickedBrandKitColor serializes without optional fields", () => {
    const event: ClickedBrandKitColor = {
      action: ActionType.clickedBrandKitColor,
      context_module: OsContextModule.brandKit,
    }

    expect(event).toEqual({
      action: "clickedBrandKitColor",
      context_module: "brandKit",
    })
  })

  it("ClickedBrandKitFont serializes to the expected shape", () => {
    const event: ClickedBrandKitFont = {
      action: ActionType.clickedBrandKitFont,
      context_module: OsContextModule.brandKit,
      font_family: "Helvetica Neue",
      font_weight: "400",
    }

    expect(event).toEqual({
      action: "clickedBrandKitFont",
      context_module: "brandKit",
      font_family: "Helvetica Neue",
      font_weight: "400",
    })
  })

  it("ClickedBrandKitFont serializes without optional fields", () => {
    const event: ClickedBrandKitFont = {
      action: ActionType.clickedBrandKitFont,
      context_module: OsContextModule.brandKit,
    }

    expect(event).toEqual({
      action: "clickedBrandKitFont",
      context_module: "brandKit",
    })
  })

  it("ClickedAddBrandKitFile serializes to the expected shape", () => {
    const event: ClickedAddBrandKitFile = {
      action: ActionType.clickedAddBrandKitFile,
      context_module: OsContextModule.brandKit,
      file_format: "png",
      file_type: "logo",
    }

    expect(event).toEqual({
      action: "clickedAddBrandKitFile",
      context_module: "brandKit",
      file_format: "png",
      file_type: "logo",
    })
  })

  it("ClickedAddBrandKitFile serializes without optional fields", () => {
    const event: ClickedAddBrandKitFile = {
      action: ActionType.clickedAddBrandKitFile,
      context_module: OsContextModule.brandKit,
    }

    expect(event).toEqual({
      action: "clickedAddBrandKitFile",
      context_module: "brandKit",
    })
  })

  it("ClickedSaveBrandKit serializes to the expected shape", () => {
    const event: ClickedSaveBrandKit = {
      action: ActionType.clickedSaveBrandKit,
      brand_kit_id: "12345",
      context_module: OsContextModule.brandKit,
    }

    expect(event).toEqual({
      action: "clickedSaveBrandKit",
      brand_kit_id: "12345",
      context_module: "brandKit",
    })
  })

  it("ClickedSaveBrandKit serializes without optional fields", () => {
    const event: ClickedSaveBrandKit = {
      action: ActionType.clickedSaveBrandKit,
      context_module: OsContextModule.brandKit,
    }

    expect(event).toEqual({
      action: "clickedSaveBrandKit",
      context_module: "brandKit",
    })
  })
})
