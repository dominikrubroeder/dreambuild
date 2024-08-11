import { fetchStoryblokStory } from "@/lib/storyblok";
import { notFound } from "next/navigation";
import { StoryblokComponent } from "@storyblok/react";
import { storyblokInit } from "@storyblok/react/rsc";
import { storyblokSettings } from "@/lib/storyblok/settings";

storyblokInit(storyblokSettings);

export default async function StoryblokPage({
  params,
}: {
  params: { storyblokSlug: string[] };
}) {
  const data = await fetchStoryblokStory({
    slug: params.storyblokSlug,
  });

  if (!data) {
    return notFound();
  }

  return <StoryblokComponent blok={data.story.content} />;
}
