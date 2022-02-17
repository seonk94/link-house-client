import Link from 'src/models/Link';

export interface GET_LINKS_RESPONSE {
  links: Link[];
}

export interface POST_LINK_RESPONSE {
  link: Link;
}

export interface PATCH_LINK_RESPONSE {
  link: Link;
}

export interface DELETE_LINK_RESPONSE {
  id: string;
}

export interface GET_METADATA_RESPONSE {
  metadata: Link;
}
