import { ContextModule, OwnerType } from "../../../Schema"
import { tappedConsign } from "../TappedConsign"

describe("tappedEntityGroup", () => {
  it("Returns expected args", () => {
    const event = tappedConsign({
      contextModule: ContextModule.sellHeader,
      contextScreenOwnerType: OwnerType.sell,
      subject: "Start selling",
    })

    expect(event).toEqual({
      action: "tappedConsign",
      context_module: "sellHeader",
      context_screen_owner_type: "sell",
      destination_screen_owner_type: "consignmentSubmission",
      subject: "Start selling",
    })
  })
})
