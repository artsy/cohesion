import { ActionType } from "."

/**
 * Schemas describing inquiry events
 * @packageDocumentation
 */

/**
 * A user successfully sends an artwork inquiry request to a partner.
 *
 * This schema describes events sent to Segment from [[sentArtworkInquiry]]
 *
 *  @example
 *  ```
 *  {
 *    action: "sentArtworkInquiry",
 *    artwork_id: "582b1bc09c18db3b0c000999",
 *    artwork_slug: "philippe-halsman-alfred-hitchcock-during-the-filming-of-the-birds",
 *    inquiry_id: "614e3063ef0b81000bc4f45a",
 *    inquiry_checkboxes: ["shipping_quote", "price_and_availability"]
 *    products: [
        {
          price: 6000,
          product_id: "582b1bc09c18db3b0c000999",
          quantity: 1
        }
      ]
 *  }
 * ```
 */

export interface SentArtworkInquiry {
  action: ActionType.sentArtworkInquiry
  artwork_id: string
  artwork_slug: string
  inquiry_id: string
  inquiry_checkboxes?: InquiryCheckboxLabel[]
  products: InquiryProduct[]
}

/**
 * The type of product associated with an inquiry request
 */
export type InquiryProduct = {
  price: string
  product_id: string
  quantity: 1
}

export enum InquiryCheckboxLabel {
  Shipping = "shipping_quote",
  PriceAndAvailability = "price_and_availability",
  ConditionAndProvenance = "condition_and_provenance",
  SimilarWork = "similar_work",
  ArtistInformation = "artist_information",
  ArtworkInformation = "artwork_information",
}
