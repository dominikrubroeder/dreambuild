import React from "react";
import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";
import { PageStoryblok } from "../../../../component-types-sb";

export default function StoryblokPage({ blok }: { blok: PageStoryblok }) {
  if (blok.body === null || blok.body === undefined || blok.body.length === 0)
    return null;

  return (
    <div {...storyblokEditable(blok)}>
      {(blok.body as SbBlokData[]).map((nestedBlok) => (
        <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </div>
  );
}
