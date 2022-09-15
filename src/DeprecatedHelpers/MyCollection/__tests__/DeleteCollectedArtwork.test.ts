import { deleteCollectedArtwork } from "../DeleteCollectedArtwork"

describe("MyCollection:DeleteCollectedArtwork", () => {
  it("tracks event properly", () => {
    const event = deleteCollectedArtwork({
      contextOwnerId: "1234567",
      contextOwnerSlug: "some-owner",
      platform: "web",
    })

    expect(event).toEqual({
      action: "deleteCollectedArtwork",
      context_module: "myCollectionArtwork",
      context_owner_id: "1234567",
      context_owner_slug: "some-owner",
      context_owner_type: "myCollectionArtwork",
      platform: "web",
    })
  })
})
