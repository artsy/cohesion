import { CmsShowAddShowToInventory } from "../ShowFlow"

describe("ShowFlow events", () => {
  it("CmsShowAddShowToInventory serializes to the expected shape", () => {
    const event: CmsShowAddShowToInventory = {
      action: "click",
      artwork_count: 12,
      partner_list_id: "partner-list-id",
      show_id: "show-id",
      user_id: "user-id",
    }

    expect(event).toEqual({
      action: "click",
      artwork_count: 12,
      partner_list_id: "partner-list-id",
      show_id: "show-id",
      user_id: "user-id",
    })
  })
})
