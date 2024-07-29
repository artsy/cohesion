type CollectorSignalLabel =
  | "Limited-Time Offer"
  | "Showing now"
  | "Bidding live now"
  | "Time left to bid"

/**
 * Mixin for interacting with an artwork with visible collector signals.
 *
 * @example
 * ```typescript
 *  {
 *    // from mixed-in type
 *    action: "clickedMainArtworkGrid",
 *    context_module: "artworkGrid",
 *
 *    // from CollectorSignalsValues
 *    signal_labels: ["Limited-Time Offer"],
 *    // or
 *    signal_labels: ["Time left to bid"],
 *    signal_lot_watcher_count: 5,
 *    signal_bid_count: 3
 *  }
 * ```
 */
export interface CollectorSignalsValues {
  signal_labels?: CollectorSignalLabel[]
  signal_lot_watcher_count?: number
  signal_bid_count?: number
}
