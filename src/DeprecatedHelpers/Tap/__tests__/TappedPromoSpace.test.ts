import { tappedPromoSpace } from "../TappedPromoSpace"

describe(tappedPromoSpace, () => {
  it("Returns expected args", () => {
    const event = tappedPromoSpace({
      path: "/collection/a-collection-id",
      subject: "Check out this sweet collection!",
    })

    expect(event).toEqual({
      action: "tappedPromoSpace",
      context_module: "promoSpace",
      context_screen_owner_type: "home",
      destination_path: "/collection/a-collection-id",
      subject: "Check out this sweet collection!",
    })
  })
})
