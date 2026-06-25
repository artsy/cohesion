import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import {
  ClickedConnectAccount,
  ClickedConnectAccountModal,
} from "../ConnectedAppsFlow"
import { OsActionType } from "../index"

describe("Connected Apps flow events", () => {
  it("ClickedConnectAccount serializes to the expected shape (connect)", () => {
    const event: ClickedConnectAccount = {
      action: OsActionType.clickedConnectAccount,
      context_module: OsContextModule.connectedAppsList,
      context_page_owner_type: OsOwnerType.connectedApps,
      label: "instagram",
      value: "connect",
    }

    expect(event).toEqual({
      action: "clickedConnectAccount",
      context_module: "connectedAppsList",
      context_page_owner_type: "connectedApps",
      label: "instagram",
      value: "connect",
    })
  })

  it("ClickedConnectAccount serializes to the expected shape (disconnect)", () => {
    const event: ClickedConnectAccount = {
      action: OsActionType.clickedConnectAccount,
      context_module: OsContextModule.connectedAppsList,
      context_page_owner_type: OsOwnerType.connectedApps,
      label: "mailchimp",
      value: "disconnect",
    }

    expect(event).toEqual({
      action: "clickedConnectAccount",
      context_module: "connectedAppsList",
      context_page_owner_type: "connectedApps",
      label: "mailchimp",
      value: "disconnect",
    })
  })

  it("ClickedConnectAccountModal serializes to the expected shape (connect)", () => {
    const event: ClickedConnectAccountModal = {
      action: OsActionType.clickedConnectAccountModal,
      context_module: OsContextModule.connectModal,
      context_page_owner_type: OsOwnerType.connectedApps,
      label: "instagram connection modal",
      value: "connect",
    }

    expect(event).toEqual({
      action: "clickedConnectAccountModal",
      context_module: "connectModal",
      context_page_owner_type: "connectedApps",
      label: "instagram connection modal",
      value: "connect",
    })
  })

  it("ClickedConnectAccountModal serializes to the expected shape (cancel)", () => {
    const event: ClickedConnectAccountModal = {
      action: OsActionType.clickedConnectAccountModal,
      context_module: OsContextModule.connectModal,
      context_page_owner_type: OsOwnerType.connectedApps,
      label: "mailchimp connection modal",
      value: "cancel",
    }

    expect(event).toEqual({
      action: "clickedConnectAccountModal",
      context_module: "connectModal",
      context_page_owner_type: "connectedApps",
      label: "mailchimp connection modal",
      value: "cancel",
    })
  })

  it("ClickedConnectAccountModal serializes to the expected shape (disconnect confirm)", () => {
    const event: ClickedConnectAccountModal = {
      action: OsActionType.clickedConnectAccountModal,
      context_module: OsContextModule.connectModal,
      context_page_owner_type: OsOwnerType.connectedApps,
      label: "instagram connection modal",
      value: "disconnect",
    }

    expect(event).toEqual({
      action: "clickedConnectAccountModal",
      context_module: "connectModal",
      context_page_owner_type: "connectedApps",
      label: "instagram connection modal",
      value: "disconnect",
    })
  })
})
