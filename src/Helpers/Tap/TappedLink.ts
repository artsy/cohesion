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
  destinationScreenOwnerId?: string
  destinationScreenOwnerSlug: string
  destinationScreenOwnerType?: ScreenOwnerType
}

export const tappedLink = ({
  contextModule,
  contextScreenOwnerType,
  contextScreenOwnerId,
  contextScreenOwnerSlug,
  destinationScreenOwnerSlug,
  destinationScreenOwnerId,
  destinationScreenOwnerType
}: TappedLinkArgs): TappedLink => {
  return {
    action: ActionType.tappedLink,
    context_module: contextModule,
    context_screen_owner_id: contextScreenOwnerId,
    context_screen_owner_slug: contextScreenOwnerSlug,
    context_screen_owner_type: contextScreenOwnerType,
    destination_screen_owner_id: destinationScreenOwnerId,
    destination_screen_owner_slug: destinationScreenOwnerSlug,
    destination_screen_owner_type: destinationScreenOwnerType,
    external: !isArtsyLink(destinationScreenOwnerSlug),
  }
}

/**
 * Checks if a link is Artsy's according to how links are treated in Eigen
 * Examples:
 * 
 * "/favorites"
 * "https://artsy.net/favorites"
 * "www.artsy.net/favorites"
 * "favorites"
 * "artsy.net/favorites"
 * "anysubdomain.artsy.net"
 * "notartsywebsite.com/favorites"
 * "favorites/another"
 */
const isArtsyLink = (link: string): boolean => {
  try {
    const url = new URL(link)
    return url.host.endsWith(".artsy.net") || url.host === "artsy.net"
  } catch(_) {
    if (link.startsWith('/')) {
      return true
    }
    const first = link.split('/')[0]
    return first.endsWith(".artsy.net") || first === "artsy.net"
  }
}
