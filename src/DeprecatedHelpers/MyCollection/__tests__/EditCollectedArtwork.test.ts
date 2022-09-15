import { editCollectedArtwork } from "../EditCollectedArtwork"

describe("MyCollection:EditCollectedArtwork", () => {
  it("tracks event properly", () => {
    const event = editCollectedArtwork({
      contextOwnerId: "1234567",
      contextOwnerSlug: "some-owner",
      platform: "mobile",
    })

    expect(event).toEqual({
      action: "editCollectedArtwork",
      context_module: "myCollectionArtwork",
      context_owner_id: "1234567",
      context_owner_slug: "some-owner",
      context_owner_type: "myCollectionArtwork",
      platform: "mobile",
    })
  })
})
