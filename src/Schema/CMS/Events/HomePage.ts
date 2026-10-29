/**
 * Schemas describing CMS Home page events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsOwnerType } from "../Values/CmsOwnerType"
import { CmsActionType } from "./index"

/**
 * A partner clicks an Actionable Insights card on the CMS homepage
 *
 * `subject` is the card that was clicked: `inquiryResponse`, `orderResponse`,
 * `publishArtworks`, or `sendOffer` (the "Send an offer on a new inquiry" card).
 * `variant` is how the card is presented: `improve` for a problem to fix,
 * `opportunity` for something the partner can act on (`sendOffer`), or
 * `positive` for good news. `destination_path` is the link the card opens, which
 * for `sendOffer` is the eligible conversation with its send-offer modal open.
 *
 * @example
 * ```
 * {
 *   action: "clickedActionableInsight",
 *   context_module: "actionableInsights",
 *   context_page_owner_type: "home",
 *   subject: "inquiryResponse" | "publishArtworks" | "orderResponse" | "sendOffer",
 *   variant: "improve" | "opportunity" | "positive",
 *   destination_path: "/conversations"
 * }
 * ```
 *
 * @example
 * ```
 * {
 *   action: "clickedActionableInsight",
 *   context_module: "actionableInsights",
 *   context_page_owner_type: "home",
 *   subject: "sendOffer",
 *   variant: "opportunity",
 *   destination_path: "/conversations/6740c1f1a1b2c3d4e5f60718"
 * }
 * ```
 */
export interface CmsClickedActionableInsight {
  action: CmsActionType.clickedActionableInsight
  context_module: CmsContextModule.actionableInsights
  context_page_owner_type: CmsOwnerType.home
  subject: string
  variant: string
  destination_path: string
}

export type CmsHomePage = CmsClickedActionableInsight
