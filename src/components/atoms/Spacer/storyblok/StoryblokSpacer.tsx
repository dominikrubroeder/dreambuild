import { SpacerStoryblok } from "../../../../../component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";
import { cn } from "@/lib/utils";

export default function StoryblokSpacer({ blok }: { blok: SpacerStoryblok }) {
  return <div className={cn(blok.padding)} {...storyblokEditable(blok)} />;
}
