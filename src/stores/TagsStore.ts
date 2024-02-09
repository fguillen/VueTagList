import type { Tag } from "@/models/Tag";
import { reactive } from "vue";

const tags: Tag[] = reactive([]);

export const useTagsStore = () => {
  const addTag = (title: string):void => {
    tags.push({
      id: title,
      title: title
    });
  }

  const removeTag = (id: string): void => {
    const index = tags.findIndex(e => e.id == id);
    tags.splice(index, 1);
  }

  return {
    tags,
    addTag,
    removeTag
  }
}
