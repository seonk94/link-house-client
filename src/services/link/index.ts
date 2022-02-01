import {
  deleteLinkApi, getLinksApi, getMetadataApi, patchLinkApi, postLinkApi,
} from 'src/controller';
import Link from 'src/models/Link';
import {
  GET_LINKS_RESPONSE, PATCH_LINK_RESPONSE, POST_LINK_RESPONSE, DELETE_LINK_RESPONSE, GET_METADATA_RESPONSE,
} from './type';

class LinkService {
  public getLinks() {
    return getLinksApi<GET_LINKS_RESPONSE>();
  }

  public postLink(params: string) {
    return postLinkApi<string, POST_LINK_RESPONSE>(params);
  }

  public patchLink(params: Link) {
    return patchLinkApi<Link, PATCH_LINK_RESPONSE>(params._id, params);
  }

  public deleteLink(params: string) {
    return deleteLinkApi<DELETE_LINK_RESPONSE>(params);
  }

  public getMetadata(params: string) {
    return getMetadataApi<string, GET_METADATA_RESPONSE>(params);
  }
}

export const linkService = new LinkService();
