import { tappedCollectedArtwork } from "../TappedCollectedArtwork"

describe("MyCollection:TappedCollectedArtwork", () => {
  it("tracks event properly", () => {
    const event = tappedCollectedArtwork({
      contextOwnerId: "1234567",
      destinationOwnerId: "098765",
      destinationOwnerSlug: "some-other-owner",
    })

    expect(event).toEqual({
      action: "tappedCollectedArtwork",
      context_module: "myCollectionHome",
      context_owner_id: "1234567",
      context_owner_type: "myCollection",
      destination_owner_id: "098765",
      destination_owner_slug: "some-other-owner",
      destination_owner_type: "myCollectionArtwork",
    })
  })
})
