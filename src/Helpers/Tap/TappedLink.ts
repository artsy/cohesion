import {
  ActionType,
  ContextModule,
  ScreenOwnerType,
  TappedLink,
} from "../../Schema"

export interface TappedLinkArgs {
  contextModule: ContextModule
  contextScreenOwnerType: ScreenOwnerType
  contextScreenOwnerId?: string
  contextScreenOwnerSlug?: string
  destinationScreenOwnerSlug: string
}

export const tappedLink = ({
  contextModule,
  contextScreenOwnerType,
  contextScreenOwnerId,
  contextScreenOwnerSlug,
  destinationScreenOwnerSlug
}: TappedLinkArgs): TappedLink => {
  return {
    action: ActionType.tappedLink,
    context_module: contextModule,
    context_screen_owner_id: contextScreenOwnerId,
    context_screen_owner_slug: contextScreenOwnerSlug,
    context_screen_owner_type: contextScreenOwnerType,
    destination_screen_owner_slug: destinationScreenOwnerSlug,
    external: !isArtsyLink(destinationScreenOwnerSlug),
  }
}

const isArtsyLink = (link: string): boolean => {
  try {
    const url = new URL(link)
    return url.host.endsWith(".artsy.net") || url.host === "artsy.net"
  } catch(_) {
    if (link.startsWith('/')) {
      return true
    }
    // handle for:
    // "www.artsy.net/something"
    // "something"
    // "artsy.net/something"
    // "anysubdomain.artsy.net"
    // "notartsywebsite.com/something"
    // "something/anotherthing"
    const first = link.split('/')[0]
    return first.endsWith(".artsy.net") || first === "artsy.net"
  }
}