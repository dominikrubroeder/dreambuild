import {StoryblokStory} from 'storyblok-generate-ts'

export interface ContainerStoryblok {
  layout:
    | "grid"
    | "grid sm:grid-cols-2"
    | "grid sm:grid-cols-2 md:sm:grid-cols-3"
    | "grid sm:grid-cols-2 md:sm:grid-cols-4"
    | "grid sm:grid-cols-2 md:sm:grid-cols-5"
    | "grid grid-cols-dynamic";
  gap: number | string;
  body?: (ContainerStoryblok | PageStoryblok | RichtextfieldStoryblok | SpacerStoryblok)[];
  animate_in?: boolean;
  padding_top?: SpacerStoryblok[];
  padding_bottom?: SpacerStoryblok[];
  inner_max_width: number | string;
  inner_alignment: number | string;
  inner_padding?: number | string;
  max_width?: number | string;
  alignment?: number | string;
  padding?: number | string;
  rounded?: number | string;
  _uid: string;
  component: "container";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (ContainerStoryblok | PageStoryblok | RichtextfieldStoryblok | SpacerStoryblok)[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface RichtextfieldStoryblok {
  description?: RichtextStoryblok;
  text_alignment: number | string;
  max_width: number | string;
  alignment: number | string;
  padding: number | string;
  rounded: number | string;
  _uid: string;
  component: "richtextfield";
  [k: string]: any;
}

export interface SpacerStoryblok {
  padding?: number | string;
  _uid: string;
  component: "spacer";
  [k: string]: any;
}
