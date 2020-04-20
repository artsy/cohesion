/**
 * The top-level actions an Event describes.
 *
 * Each ActionType corresponds with a table in Redshift.
 * @packageDocumentation
 */
export enum ActionType {
  /**
   * Corresponds to {@link AuthImpression}
   */
  authImpression = "authImpression",
  createdAccount = "createdAccount",
  successfullyLoggedIn = "successfullyLoggedIn",
}
