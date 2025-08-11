/**
 * Schemas describing CMS Analytics events
 * @packageDocumentation
 */

import { CmsContextModule } from "../Values/CmsContextModule"
import { CmsOwnerType } from "../Values/CmsOwnerType"
import { CmsActionType } from "./index"

/**
 * A partner has changed the time period for a graph.
 *
 * @example
 * ```
 * {
 *   action: "changedTimePeriod",
 *   context_module: "analyticsMostViewed" | "analyticsPublishedArtworks" | "analyticsViews" | "analyticsInquiries" | "analyticsSales" | "analyticsAudience",
 *   context_page_owner_type: "analytics",
 *   time_period_start: -28 | -112 | -365,
 *   time_period_end: 0
 * }
 * ```
 */
export interface CmsAnalyticsPageChangedTimePeriod {
  action: CmsActionType.changedTimePeriod
  context_module: CmsContextModule
  context_page_owner_type: CmsOwnerType.analytics
  time_period_start: number
  time_period_end: number
}

/**
 * A partner clicks on the CTA below a graph
 *
 * @example
 * ```
 * {
 *   action: "clickedGraphCTA",
 *   context_module: "analyticsPublishedArtworks" | "analyticsInquiries" | "analyticsSales",
 *   context_page_owner_type: "analytics",
 *   destination_page_owner_type: "artworks" | "conversations" | "orders"
 * }
 * ```
 */
export interface CmsAnalyticsPageClickedGraphCTA {
  action: CmsActionType.clickedGraphCTA
  context_module: CmsContextModule
  context_page_owner_type: CmsOwnerType.analytics
  destination_page_owner_type: string
}

/**
 * A partner clicks on an entity in the "Most Viewed" section
 *
 * @example
 * ```
 * {
 *   action: "clickedMostViewed",
 *   context_module: "analyticsMostViewed",
 *   context_page_owner_type: "analytics",
 *   destination_page_owner_type: "artworks" | "show" | "artist" | "viewing-room",
 *   position: 0 | 1 | ... | 9
 * }
 * ```
 */
export interface CmsAnalyticsPageClickedMostViewed {
  action: CmsActionType.clickedMostViewed
  context_module: CmsContextModule.analyticsMostViewed
  context_page_owner_type: CmsOwnerType.analytics
  destination_page_owner_type: string
  position: number
}

/**
 * A partner views a graph on the analytics page
 *
 * @example
 * ```
 * {
 *   action: "viewedGraph",
 *   context_module: "analyticsMostViewed" | "analyticsPublishedArtworks" | "analyticsViews" | "analyticsInquiries" | "analyticsSales" | "analyticsAudience",
 *   context_page_owner_type: "analytics",
 *   graph_type: "cumulative_line" | "donut" | "horizontal_bar" | "vertical_bar",
 *   graph_data?: "device" | "medium" | "country" | "landing" | null
 * }
 * ```
 */
export interface CmsAnalyticsPageViewedGraph {
  action: CmsActionType.viewedGraph
  context_module: CmsContextModule
  context_page_owner_type: CmsOwnerType.analytics
  graph_type: string
  graph_data?: string
}

/**
 * A partner views a datapoint on a graph on the analytics page
 *
 * @example
 * ```
 * {
 *   action: "viewedGraphDatapoint",
 *   context_module: "analyticsMostViewed" | "analyticsPublishedArtworks" | "analyticsViews" | "analyticsInquiries" | "analyticsSales" | "analyticsAudience",
 *   context_page_owner_type: "analytics",
 *   graph_type: "cumulative_line" | "donut" | "horizontal_bar" | "vertical_bar",
 *   graph_data?: "device" | "medium" | "country" | "landing" | null,
 *   datapoint_bucket_size?: "daily" | "weekly" | "monthly" | null,
 *   datapoint_is_other?: true | false | null
 * }
 * ```
 */
export interface CmsAnalyticsPageViewedGraphDatapoint {
  action: CmsActionType.viewedGraphDatapoint
  context_module: CmsContextModule
  context_page_owner_type: CmsOwnerType.analytics
  graph_type: string
  graph_data?: string
  datapoint_bucket_size?: string
  datapoint_is_other?: boolean
}

/**
 * A partner views a tooltip on the analytics page
 *
 * @example
 * ```
 * {
 *   action: "viewedTooltip",
 *   context_module: "analyticsMostViewed" | "analyticsPublishedArtworks" | "analyticsViews" | "analyticsInquiries" | "analyticsSales" | "analyticsAudience",
 *   context_page_owner_type: "analytics",
 *   type: "explanatory" | "response-time" | "response-time-score"
 * }
 * ```
 */
export interface CmsAnalyticsPageViewedTooltip {
  action: CmsActionType.viewedTooltip
  context_module: CmsContextModule
  context_page_owner_type: CmsOwnerType.analytics
  type: string
}

export type CmsAnalyticsPage =
  | CmsAnalyticsPageChangedTimePeriod
  | CmsAnalyticsPageClickedGraphCTA
  | CmsAnalyticsPageClickedMostViewed
  | CmsAnalyticsPageViewedGraph
  | CmsAnalyticsPageViewedGraphDatapoint
  | CmsAnalyticsPageViewedTooltip
