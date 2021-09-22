import { tappedMakeOffer } from "../TappedMakeOffer"

describe("Conversation:TappedMakeOffer", () => {
  it("tracks event properly", () => {
    const event = tappedMakeOffer("123")

    expect(event).toEqual({
      action: "tappedMakeOffer",
      context_owner_type: "conversation",
      impulse_conversation_id: "123",
    })
  })
})
