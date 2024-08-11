import { StoryblokStory } from "storyblok-generate-ts";

export interface ContainerStoryblok {
  _uid: string;
  component: "container";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (ContainerStoryblok | PageStoryblok)[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}
