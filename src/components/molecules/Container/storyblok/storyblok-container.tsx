import { ContainerStoryblok } from "../../../../../component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function StoryblokContainer({
  blok,
}: {
  blok: ContainerStoryblok;
}) {
  return <section {...storyblokEditable(blok)}></section>;
}
