import { ContextModule } from "../Values/ContextModule"
import { OwnerType } from "../Values/OwnerType"
import { ActionType } from "."

/**
 * Schema describing 'MyCollectionInsightsRails' events
 * @packageDocumentation
 */

/**
 * A user taps on the MyCollectionInsightsMedianAuctionRailItem
 *
 * This schema describes events sent to Segment from [[tappedMyCollectionInsightsMedianAuctionRailItem]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedMyCollectionInsightsMedianAuctionRailItem",
 *    context_module: "myCollectionInsightsMedianAuctionRail",
 *    context_screen: "myCollectionInsights",
 *    context_screen_owner_type: "myCollectionInsights",
 *    artist_id: "373828273738281827",
 *    category: "Painting"
 *  }
 * ```
 */
export interface TappedMyCollectionInsightsMedianAuctionRailItem {
  action: ActionType.tappedMyCollectionInsightsMedianAuctionRailItem
  context_module: ContextModule.myCollectionInsightsMedianAuctionRail
  context_screen: OwnerType.myCollectionInsights
  context_screen_owner_type: OwnerType.myCollectionInsights
  artist_id: string
  category: string
}

/**
 * Schema describing 'MyCollectionInsightsMedianAuctionPriceChart' events
 * @packageDocumentation
 */

/**
 * A user taps on the MedianAuctionPriceChartCategory
 *
 * This schema describes events sent to Segment from [[tappedMyCollectionInsightsMedianAuctionPriceChartCategory]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedMyCollectionInsightsMedianAuctionPriceChartCategory",
 *    context_module: "myCollectionInsightsMedianAuctionPriceChart",
 *    context_screen: "myCollectionInsightsMedianAuctionPrice",
 *    context_screen_owner_type: "myCollectionInsightsMedianAuctionPrice",
 *    context_screen_owner_id: "5fad78273c8451000d0c53b9",
 *    context_screen_owner_slug: "andy-warhol",
 *    artist_id: "5fad78273c8451000d0c53b9",
 *    selected_category: "Painting"
 *  }
 * ```
 */
export interface TappedMyCollectionInsightsMedianAuctionPriceChartCategory {
  action: ActionType.tappedMyCollectionInsightsMedianAuctionPriceChartCategory
  context_module: ContextModule.myCollectionInsightsMedianAuctionPriceChart
  context_screen: OwnerType.myCollectionInsightsMedianAuctionPrice
  context_screen_owner_type: OwnerType.myCollectionInsightsMedianAuctionPrice
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  artist_id: string
  selected_category: string
}

/**
 * A user taps on the MedianAuctionPriceChartTimeframe
 *
 * This schema describes events sent to Segment from [[tappedMyCollectionInsightsMedianAuctionPriceChartTimeframe]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedMyCollectionInsightsMedianAuctionPriceChartTimeframe",
 *    context_module: "myCollectionInsightsMedianAuctionPriceChart",
 *    context_screen: "myCollectionInsightsMedianAuctionPrice",
 *    context_screen_owner_type: "myCollectionInsightsMedianAuctionPrice",
 *    context_screen_owner_id: "5fad78273c8451000d0c53b9",
 *    context_screen_owner_slug: "andy-warhol",
 *    artist_id: "5fad78273c8451000d0c53b9",
 *    selected_timeframe: "3 yrs"
 *  }
 * ```
 */
export interface TappedMyCollectionInsightsMedianAuctionPriceChartTimeframe {
  action: ActionType.tappedMyCollectionInsightsMedianAuctionPriceChartTimeframe
  context_module: ContextModule.myCollectionInsightsMedianAuctionPriceChart
  context_screen: OwnerType.myCollectionInsightsMedianAuctionPrice
  context_screen_owner_type: OwnerType.myCollectionInsightsMedianAuctionPrice
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  artist_id: string
  selected_timeframe: string
}

/**
 * A user taps on the MedianAuctionPriceChartCareerHighlight
 *
 * This schema describes events sent to Segment from [[tappedMyCollectionInsightsMedianAuctionPriceChartCareerHighlight]]
 *
 *  @example
 *  ```
 *  {
 *    action: "tappedMyCollectionInsightsMedianAuctionPriceChartCareerHighlight",
 *    context_module: "myCollectionInsightsMedianAuctionPriceChart",
 *    context_screen: "myCollectionInsightsMedianAuctionPrice",
 *    context_screen_owner_type: "myCollectionInsightsMedianAuctionPrice",
 *    context_screen_owner_id: "5fad78273c8451000d0c53b9",
 *    context_screen_owner_slug: "andy-warhol",
 *    artist_id: "5fad78273c8451000d0c53b9",
 *    selected_category: "Painting"
 *    selected_timeframe:"3 yrs"
 *    year: 2019
 *  }
 * ```
 */
export interface TappedMyCollectionInsightsMedianAuctionPriceChartCareerHighlight {
  action: ActionType.tappedMyCollectionInsightsMedianAuctionPriceChartCareerHighlight
  context_module: ContextModule.myCollectionInsightsMedianAuctionPriceChart
  context_screen: OwnerType.myCollectionInsightsMedianAuctionPrice
  context_screen_owner_type: OwnerType.myCollectionInsightsMedianAuctionPrice
  context_screen_owner_id?: string
  context_screen_owner_slug?: string
  artist_id: string
  selected_category: string
  selected_timeframe: string
  year: number
}
