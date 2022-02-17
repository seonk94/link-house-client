import { getTagApi, patchTagApi, postTagApi } from 'src/controller';
import Tag from 'src/models/Tag';

import { GET_TAG_RESPONSE, PATCH_TAG_RESPONSE, POST_TAG_RESPONSE } from './type';

class TagService {
  public getTag() {
    return getTagApi<GET_TAG_RESPONSE>();
  }

  public postTag(userId: string) {
    return postTagApi<string, POST_TAG_RESPONSE>(userId);
  }

  public patchTag(params: Tag) {
    return patchTagApi<Tag, PATCH_TAG_RESPONSE>(params);
  }
}

export const tagService = new TagService();
