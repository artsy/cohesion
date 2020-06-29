import { focusedOnConversationMessageInput } from "../FocusedOnConversationMessageInput"

describe("focusedOnConversationMessageInput", () => {
  it("returns expected event properties", () => {
    const event = focusedOnConversationMessageInput({
      impulse_conversation_id: "123",
    })

    expect(event).toEqual({
      action: "focusedOnConversationMessageInput",
      impulse_conversation_id: "123",
    })
  })
})
