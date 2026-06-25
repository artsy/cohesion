import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { OsActionType } from "../index"
import {
  OsClickedAspectRatio,
  OsClickedBrandKitModal,
  OsClickedConnectModal,
  OsClickedExitEditor,
  OsClickedImageBankImage,
  OsClickedImageBankManagement,
  OsClickedPublishConfirmation,
  OsClickedUploadImageBank,
  OsCreatedStudioContent,
} from "../InstagramEditor"

describe("Instagram Editor events", () => {
  it("OsClickedConnectModal serializes to the expected shape", () => {
    const event: OsClickedConnectModal = {
      action: OsActionType.clickedConnectModal,
      context_module: OsContextModule.connectModal,
      context_page_owner_type: OsOwnerType.studioInstagram,
      label: "instagram",
      value: "connect",
    }

    expect(event).toEqual({
      action: "clickedConnectModal",
      context_module: "connectModal",
      context_page_owner_type: "studioInstagram",
      label: "instagram",
      value: "connect",
    })
  })

  it("OsClickedExitEditor serializes to the expected shape", () => {
    const event: OsClickedExitEditor = {
      action: OsActionType.clickedExitEditor,
      context_module: OsContextModule.editorHeader,
      context_page_owner_type: OsOwnerType.studioInstagram,
      label: "instagram editor",
    }

    expect(event).toEqual({
      action: "clickedExitEditor",
      context_module: "editorHeader",
      context_page_owner_type: "studioInstagram",
      label: "instagram editor",
    })
  })

  it("OsClickedBrandKitModal serializes to the expected shape", () => {
    const event: OsClickedBrandKitModal = {
      action: OsActionType.clickedBrandKitModal,
      context_module: OsContextModule.brandKitPromptModal,
      context_page_owner_type: OsOwnerType.studioInstagram,
      label: "instagram brand kit modal",
      value: "create",
    }

    expect(event).toEqual({
      action: "clickedBrandKitModal",
      context_module: "brandKitPromptModal",
      context_page_owner_type: "studioInstagram",
      label: "instagram brand kit modal",
      value: "create",
    })
  })

  it("OsClickedImageBankImage serializes to the expected shape", () => {
    const event: OsClickedImageBankImage = {
      action: OsActionType.clickedImageBankImage,
      context_module: OsContextModule.imageBank,
      context_page_owner_type: OsOwnerType.studioInstagram,
      value: "selected",
    }

    expect(event).toEqual({
      action: "clickedImageBankImage",
      context_module: "imageBank",
      context_page_owner_type: "studioInstagram",
      value: "selected",
    })
  })

  it("OsClickedUploadImageBank serializes to the expected shape", () => {
    const event: OsClickedUploadImageBank = {
      action: OsActionType.clickedUploadImageBank,
      context_module: OsContextModule.imageBank,
      context_page_owner_type: OsOwnerType.studioInstagram,
      field: "file",
      value: "filename.png",
    }

    expect(event).toEqual({
      action: "clickedUploadImageBank",
      context_module: "imageBank",
      context_page_owner_type: "studioInstagram",
      field: "file",
      value: "filename.png",
    })
  })

  it("OsClickedImageBankManagement serializes to the expected shape", () => {
    const event: OsClickedImageBankManagement = {
      action: OsActionType.clickedImageBankManagement,
      context_module: OsContextModule.imageBank,
      context_page_owner_type: OsOwnerType.studioInstagram,
      value: "remove",
    }

    expect(event).toEqual({
      action: "clickedImageBankManagement",
      context_module: "imageBank",
      context_page_owner_type: "studioInstagram",
      value: "remove",
    })
  })

  it("OsClickedAspectRatio serializes to the expected shape", () => {
    const event: OsClickedAspectRatio = {
      action: OsActionType.clickedAspectRatio,
      context_module: OsContextModule.imageEditor,
      context_page_owner_type: OsOwnerType.studioInstagram,
      label: "image aspect ratio",
    }

    expect(event).toEqual({
      action: "clickedAspectRatio",
      context_module: "imageEditor",
      context_page_owner_type: "studioInstagram",
      label: "image aspect ratio",
    })
  })

  it("OsClickedPublishConfirmation serializes to the expected shape", () => {
    const event: OsClickedPublishConfirmation = {
      action: OsActionType.clickedPublishConfirmation,
      context_module: OsContextModule.publishConfirmationModal,
      context_page_owner_type: OsOwnerType.studioInstagram,
      value: "continue",
    }

    expect(event).toEqual({
      action: "clickedPublishConfirmation",
      context_module: "publishConfirmationModal",
      context_page_owner_type: "studioInstagram",
      value: "continue",
    })
  })

  it("OsCreatedStudioContent serializes to the expected shape (instagram post)", () => {
    const event: OsCreatedStudioContent = {
      action: OsActionType.createdStudioContent,
      brand_kit: "true",
      content: {
        artistNames: ["Jane Doe", "John Doe"],
        artworkTitle: "Xpto",
        aspectRatio: "4:5",
        collaborators: ["bonnie", "clyde"],
        imageCount: { artwork_id: "artwork-id", count: 4 },
        postCaption: "FooBar",
      },
      context_module: OsContextModule.instagramEditor,
      context_page_owner_type: OsOwnerType.studioInstagram,
      value: "instagram post",
    }

    expect(event).toEqual({
      action: "createdStudioContent",
      brand_kit: "true",
      content: {
        artistNames: ["Jane Doe", "John Doe"],
        artworkTitle: "Xpto",
        aspectRatio: "4:5",
        collaborators: ["bonnie", "clyde"],
        imageCount: { artwork_id: "artwork-id", count: 4 },
        postCaption: "FooBar",
      },
      context_module: "instagramEditor",
      context_page_owner_type: "studioInstagram",
      value: "instagram post",
    })
  })

  it("OsCreatedStudioContent serializes to the expected shape (png download)", () => {
    const event: OsCreatedStudioContent = {
      action: OsActionType.createdStudioContent,
      brand_kit: "false",
      content: {},
      context_module: OsContextModule.instagramEditor,
      context_page_owner_type: OsOwnerType.studioInstagram,
      value: "instagram png download",
    }

    expect(event).toEqual({
      action: "createdStudioContent",
      brand_kit: "false",
      content: {},
      context_module: "instagramEditor",
      context_page_owner_type: "studioInstagram",
      value: "instagram png download",
    })
  })
})
