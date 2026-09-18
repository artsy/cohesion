import { CmsContextModule } from "../../Values/CmsContextModule"
import { CmsOwnerType } from "../../Values/CmsOwnerType"
import {
  CmsClickedFeaturedInEditorialBadge,
  CmsEnteredArtistSocialHandle,
} from "../ArtistFlow"
import { CmsActionType } from "../index"

describe("ArtistFlow events", () => {
  it("CmsClickedFeaturedInEditorialBadge serializes to the expected shape (artist list)", () => {
    const event: CmsClickedFeaturedInEditorialBadge = {
      action: CmsActionType.clickedFeaturedInEditorialBadge,
      context_module: CmsContextModule.artistList,
      context_page_owner_id: "derrick-adams",
      context_page_owner_type: CmsOwnerType.artist,
      destination_path: "/article/some-editorial-slug",
    }

    expect(event).toEqual({
      action: "clickedFeaturedInEditorialBadge",
      context_module: "artistList",
      context_page_owner_id: "derrick-adams",
      context_page_owner_type: "artist",
      destination_path: "/article/some-editorial-slug",
    })
  })

  it("CmsClickedFeaturedInEditorialBadge serializes to the expected shape (artist header)", () => {
    const event: CmsClickedFeaturedInEditorialBadge = {
      action: CmsActionType.clickedFeaturedInEditorialBadge,
      context_module: CmsContextModule.artistShow,
      context_page_owner_id: "derrick-adams",
      context_page_owner_type: CmsOwnerType.artist,
      destination_path: "/article/some-editorial-slug",
    }

    expect(event).toEqual({
      action: "clickedFeaturedInEditorialBadge",
      context_module: "artistShow",
      context_page_owner_id: "derrick-adams",
      context_page_owner_type: "artist",
      destination_path: "/article/some-editorial-slug",
    })
  })

  it("CmsEnteredArtistSocialHandle serializes to the expected shape (added)", () => {
    const event: CmsEnteredArtistSocialHandle = {
      action: CmsActionType.enteredArtistSocialHandle,
      context_module: CmsContextModule.artistOverviewSocials,
      context_page_owner_id: "derrick-adams",
      context_page_owner_type: CmsOwnerType.artist,
      handle: "derrickadamsny",
      outcome: "added",
      service: "instagram",
    }

    expect(event).toEqual({
      action: "enteredArtistSocialHandle",
      context_module: "artistOverviewSocials",
      context_page_owner_id: "derrick-adams",
      context_page_owner_type: "artist",
      handle: "derrickadamsny",
      outcome: "added",
      service: "instagram",
    })
  })

  it("CmsEnteredArtistSocialHandle serializes to the expected shape (updated)", () => {
    const event: CmsEnteredArtistSocialHandle = {
      action: CmsActionType.enteredArtistSocialHandle,
      context_module: CmsContextModule.artistOverviewSocials,
      context_page_owner_id: "derrick-adams",
      context_page_owner_type: CmsOwnerType.artist,
      handle: "derrickadams",
      outcome: "updated",
      service: "instagram",
    }

    expect(event).toEqual({
      action: "enteredArtistSocialHandle",
      context_module: "artistOverviewSocials",
      context_page_owner_id: "derrick-adams",
      context_page_owner_type: "artist",
      handle: "derrickadams",
      outcome: "updated",
      service: "instagram",
    })
  })
})
