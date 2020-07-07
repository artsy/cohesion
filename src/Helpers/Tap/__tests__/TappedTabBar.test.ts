import { tappedTabBar } from "../TappedTabBar"

describe(tappedTabBar, () => {
  it("Returns expected args", () => {
    const event = tappedTabBar({
      badge: false,
      tab: "sell",
    })

    expect(event).toEqual({
      action: "tappedTabBar",
      badge: false,
      context_module: "tabBar",
      context_screen_owner_type: "home",
      tab: "sell",
    })
  })
})
