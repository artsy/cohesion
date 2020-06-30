import { sentConversationMessage } from "../SentConversationMessage"

describe("sentConversationMessage", () => {
  it("returns expected event properties", () => {
    const event = sentConversationMessage({
      impulseConversationId: "123",
      impulseMessageId: "54321",
    })

    expect(event).toEqual({
      action: "sentConversationMessage",
      impulse_conversation_id: "123",
      impulse_message_id: "54321",
    })
  })
})
