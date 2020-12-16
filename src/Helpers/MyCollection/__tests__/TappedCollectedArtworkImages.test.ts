import { tappedCollectedArtworkImages } from "../TappedCollectedArtworkImages"

describe("MyCollection:TappedCollectedArtworkImages", () => {
  it("tracks event properly", () => {
    const event = tappedCollectedArtworkImages({
      contextOwnerId: "artwork-id",
      contextOwnerSlug: "artwork-slug",
    })

    expect(event).toEqual({
      action: "tappedCollectedArtworkImages",
      context_module: "myCollectionArtwork",
      context_owner_id: "artwork-id",
      context_owner_slug: "artwork-slug",
      context_owner_type: "myCollectionArtwork",
    })
  })
})
