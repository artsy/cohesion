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
 * @example
 * ```
 * {
 *   action: "clickedActionableInsight",
 *   context_module: "actionableInsights",
 *   context_page_owner_type: "home",
 *   subject: "inquiryResponse" | "publishArtworks" | "orderResponse",
 *   variant: "improve" | "positive",
 *   destination_path: "/conversations"
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
