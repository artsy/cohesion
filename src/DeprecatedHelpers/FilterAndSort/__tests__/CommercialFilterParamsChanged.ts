import { OwnerType } from "../../../Schema"
import { commercialFilterParamsChanged } from "../CommercialFilterParamsChanged"

describe("commercialFilterParamsChanged", () => {
  it("returns expected event properties", () => {
    const event = commercialFilterParamsChanged({
      changed: '{"acquireable":true,"priceRange":"1000-5000"}',
      contextOwnerId: "58ba65b1275b24421f80a102",
      contextOwnerSlug: "tugo-cheng",
      contextOwnerType: OwnerType.artist,
      current: '{"acquireable":false,"priceRange":"*-*"}',
    })

    expect(event).toEqual({
      action: "commercialFilterParamsChanged",
      changed: '{"acquireable":true,"priceRange":"1000-5000"}',
      context_module: "artworkGrid",
      context_owner_id: "58ba65b1275b24421f80a102",
      context_owner_slug: "tugo-cheng",
      context_owner_type: "artist",
      current: '{"acquireable":false,"priceRange":"*-*"}',
    })
  })
})
