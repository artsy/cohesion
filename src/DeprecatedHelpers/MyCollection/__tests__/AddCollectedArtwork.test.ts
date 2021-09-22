import { addCollectedArtwork } from "../AddCollectedArtwork"

describe("MyCollection:AddCollectedArtwork", () => {
  it("tracks event properly", () => {
    const event = addCollectedArtwork()

    expect(event).toEqual({
      action: "addCollectedArtwork",
      context_module: "myCollectionHome",
      context_owner_type: "myCollection",
    })
  })
})
