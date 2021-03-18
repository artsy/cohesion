import { tappedViewOffer } from "../TappedViewOffer"

describe("Conversation:TappedViewOffer", () => {
  it("tracks event properly", () => {
    const event = tappedViewOffer({
      cta: "Offer Accepted",
      impulse_conversation_id: "123",
    })

    expect(event).toEqual({
      action: "tappedViewOffer",
      context_owner_type: "conversation",
      impulse_conversation_id: "123",
      subject: "Offer Accepted",
    })
  })
})
