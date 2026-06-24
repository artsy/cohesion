/**
 * Schemas describing Art OS Connected Apps flow events
 * @packageDocumentation
 */

import { OsContextModule } from "../Values/OsContextModule"
import { OsOwnerType } from "../Values/OsOwnerType"
import { OsActionType } from "./index"

/**
 * A partner clicks the Connect or Disconnect button on a connected-account card.
 *
 * @example
 * ```
 * {
 *   action: "clickedConnectAccount",
 *   context_module: "connectedAppsList",
 *   context_page_owner_type: "connectedApps",
 *   label: "instagram",
 *   value: "connect"
 * }
 * ```
 */
export interface ClickedConnectAccount {
  action: OsActionType.clickedConnectAccount
  context_module: OsContextModule.connectedAppsList
  context_page_owner_type: OsOwnerType.connectedApps
  label: "instagram" | "mailchimp"
  value: "connect" | "disconnect"
}

/**
 * A partner clicks a button inside the connect or disconnect confirmation modal.
 *
 * @example
 * ```
 * {
 *   action: "clickedConnectAccountModal",
 *   context_module: "connectModal",
 *   context_page_owner_type: "connectedApps",
 *   label: "instagram connection modal",
 *   value: "connect"
 * }
 * ```
 */
export interface ClickedConnectAccountModal {
  action: OsActionType.clickedConnectAccountModal
  context_module: OsContextModule.connectModal
  context_page_owner_type: OsOwnerType.connectedApps
  label: "instagram connection modal" | "mailchimp connection modal"
  value: "connect" | "disconnect" | "cancel"
}

export type OSConnectedAppsFlow =
  | ClickedConnectAccount
  | ClickedConnectAccountModal
