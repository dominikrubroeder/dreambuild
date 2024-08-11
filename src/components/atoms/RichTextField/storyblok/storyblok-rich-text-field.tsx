"use client";

import { useRenderRichTextField } from "./hooks/use-render-rich-text-field";
import {
  RichtextfieldStoryblok,
  RichtextStoryblok,
} from "../../../../../component-types-sb";
import { cn } from "@/lib/utils";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function StoryblokRichTextField({
  blok,
  className,
  ...restProps
}: {
  blok: RichtextStoryblok | RichtextfieldStoryblok | undefined;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const isEmpty =
    blok?.description?.content?.length === 1 &&
    blok?.description?.content[0].content === undefined;

  const renderedContent = useRenderRichTextField(
    blok && blok.description ? blok.description : blok,
  );

  if (
    blok === undefined ||
    renderedContent === undefined ||
    renderedContent === null ||
    isEmpty
  )
    return null;

  const backgroundColor = blok.background_color?.value ?? "transparent";

  return (
    <div
      className={cn(
        blok.padding,
        blok.max_width,
        blok.alignment,
        blok.text_alignment,
        blok.rounded,
        className,
      )}
      style={{ backgroundColor: backgroundColor }}
      {...restProps}
      {...storyblokEditable(blok)}
    >
      {renderedContent}
    </div>
  );
}
