import { OsContextModule } from "../../Values/OsContextModule"
import { OsOwnerType } from "../../Values/OsOwnerType"
import {
  OsClickedArtworkSearchResult,
  OsSearchedArtworks,
} from "../FilterSortSearch"
import { OsActionType, OsEvent } from "../index"

describe("Filter, sort & search events", () => {
  it("OsSearchedArtworks serializes to the expected shape", () => {
    const event: OsSearchedArtworks = {
      action: OsActionType.searchedArtworks,
      context_module: OsContextModule.artworkSearch,
      context_page_owner_type: OsOwnerType.inventory,
      is_partner_search_profile: true,
      query: "Kelly",
      query_length: 5,
      value: 42,
    }

    expect(event).toEqual({
      action: "searchedArtworks",
      context_module: "artworkSearch",
      context_page_owner_type: "inventory",
      is_partner_search_profile: true,
      query: "Kelly",
      query_length: 5,
      value: 42,
    })
  })

  it("OsSearchedArtworks accepts an event without the search profile fields", () => {
    const event: OsSearchedArtworks = {
      action: OsActionType.searchedArtworks,
      context_module: OsContextModule.artworkSearch,
      context_page_owner_type: OsOwnerType.collection,
      query: "Kelly",
      value: 42,
    }

    expect(event).toEqual({
      action: "searchedArtworks",
      context_module: "artworkSearch",
      context_page_owner_type: "collection",
      query: "Kelly",
      value: 42,
    })
  })

  it("OsClickedArtworkSearchResult serializes to the expected shape", () => {
    const event: OsClickedArtworkSearchResult = {
      action: OsActionType.clickedArtworkSearchResult,
      artwork_id: "abc123",
      context_module: OsContextModule.artworkTable,
      context_page_owner_type: OsOwnerType.inventory,
      interaction: "opened",
      is_partner_search_profile: true,
      query_length: 5,
    }

    expect(event).toEqual({
      action: "clickedArtworkSearchResult",
      artwork_id: "abc123",
      context_module: "artworkTable",
      context_page_owner_type: "inventory",
      interaction: "opened",
      is_partner_search_profile: true,
      query_length: 5,
    })
  })

  it("OsClickedArtworkSearchResult is part of the OsEvent union", () => {
    const event: OsEvent = {
      action: OsActionType.clickedArtworkSearchResult,
      artwork_id: "abc123",
      context_module: OsContextModule.artworkTable,
      context_page_owner_type: OsOwnerType.collection,
      interaction: "selected",
      is_partner_search_profile: false,
      query_length: 5,
    }

    expect(event.action).toEqual("clickedArtworkSearchResult")
  })
})
