import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import { OsActionType } from "../index"
import { OsClickedConnectModal } from "../InstagramEditor"
import {
  OsClickedSendConfirmation,
  OsCreatedMailchimpContent,
} from "../MailchimpEditor"
import { OsClickedBrandKitModal, OsClickedExitEditor } from "../MaterialsEditor"

describe("Mailchimp Editor events", () => {
  it("OsClickedConnectModal serializes to the expected shape (mailchimp)", () => {
    const event: OsClickedConnectModal = {
      action: OsActionType.clickedConnectModal,
      context_module: OsContextModule.connectModal,
      context_page_owner_type: OsOwnerType.studioMailchimp,
      label: "mailchimp",
      value: "connect",
    }

    expect(event).toEqual({
      action: "clickedConnectModal",
      context_module: "connectModal",
      context_page_owner_type: "studioMailchimp",
      label: "mailchimp",
      value: "connect",
    })
  })

  it("OsClickedExitEditor serializes to the expected shape (mailchimp)", () => {
    const event: OsClickedExitEditor = {
      action: OsActionType.clickedExitEditor,
      context_module: OsContextModule.editorHeader,
      context_page_owner_type: OsOwnerType.studioMailchimp,
      label: "mailchimp editor",
    }

    expect(event).toEqual({
      action: "clickedExitEditor",
      context_module: "editorHeader",
      context_page_owner_type: "studioMailchimp",
      label: "mailchimp editor",
    })
  })

  it("OsClickedBrandKitModal serializes to the expected shape (mailchimp)", () => {
    const event: OsClickedBrandKitModal = {
      action: OsActionType.clickedBrandKitModal,
      context_module: OsContextModule.brandKitPromptModal,
      context_page_owner_type: OsOwnerType.studioMailchimp,
      label: "mailchimp brand kit modal",
      value: "create",
    }

    expect(event).toEqual({
      action: "clickedBrandKitModal",
      context_module: "brandKitPromptModal",
      context_page_owner_type: "studioMailchimp",
      label: "mailchimp brand kit modal",
      value: "create",
    })
  })

  it("OsClickedSendConfirmation serializes to the expected shape (continue)", () => {
    const event: OsClickedSendConfirmation = {
      action: OsActionType.clickedSendConfirmation,
      context_module: OsContextModule.sendConfirmationModal,
      context_page_owner_type: OsOwnerType.studioMailchimp,
      value: "continue",
    }

    expect(event).toEqual({
      action: "clickedSendConfirmation",
      context_module: "sendConfirmationModal",
      context_page_owner_type: "studioMailchimp",
      value: "continue",
    })
  })

  it("OsClickedSendConfirmation serializes to the expected shape (cancel)", () => {
    const event: OsClickedSendConfirmation = {
      action: OsActionType.clickedSendConfirmation,
      context_module: OsContextModule.sendConfirmationModal,
      context_page_owner_type: OsOwnerType.studioMailchimp,
      value: "cancel",
    }

    expect(event).toEqual({
      action: "clickedSendConfirmation",
      context_module: "sendConfirmationModal",
      context_page_owner_type: "studioMailchimp",
      value: "cancel",
    })
  })

  it("OsCreatedMailchimpContent serializes to the expected shape (campaign)", () => {
    const event: OsCreatedMailchimpContent = {
      action: OsActionType.createdStudioContent,
      brand_kit: true,
      content: {
        artistNames: ["Jane Doe", "John Doe"],
        artworkTitle: "Xpto",
        recipientCount: 150,
        subject: "New artwork available",
      },
      context_module: OsContextModule.mailchimpEditor,
      context_page_owner_type: OsOwnerType.studioMailchimp,
      value: "mailchimp campaign",
    }

    expect(event).toEqual({
      action: "createdStudioContent",
      brand_kit: true,
      content: {
        artistNames: ["Jane Doe", "John Doe"],
        artworkTitle: "Xpto",
        recipientCount: 150,
        subject: "New artwork available",
      },
      context_module: "mailchimpEditor",
      context_page_owner_type: "studioMailchimp",
      value: "mailchimp campaign",
    })
  })

  it("OsCreatedMailchimpContent serializes to the expected shape (pdf download)", () => {
    const event: OsCreatedMailchimpContent = {
      action: OsActionType.createdStudioContent,
      brand_kit: false,
      content: {
        artistNames: ["Jane Doe", "John Doe"],
        artworkTitle: "Xpto",
      },
      context_module: OsContextModule.mailchimpEditor,
      context_page_owner_type: OsOwnerType.studioMailchimp,
      value: "pdf download",
    }

    expect(event).toEqual({
      action: "createdStudioContent",
      brand_kit: false,
      content: {
        artistNames: ["Jane Doe", "John Doe"],
        artworkTitle: "Xpto",
      },
      context_module: "mailchimpEditor",
      context_page_owner_type: "studioMailchimp",
      value: "pdf download",
    })
  })
})
