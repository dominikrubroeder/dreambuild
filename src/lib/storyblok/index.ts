"use server";

import { getStoryblokApi } from "@storyblok/react/rsc";
import { unstable_noStore as noStore } from "next/cache";
import { ISbStoriesParams } from "@storyblok/react";
import { getStoryblokAccessVersion } from "@/lib/storyblok/helpers";

export async function fetchStoryblokStory({
  slug,
  resolveLinks,
  resolveRelations,
}: {
  slug: string | string[];
  resolveLinks?: ISbStoriesParams["resolve_links"];
  resolveRelations?: ISbStoriesParams["resolve_relations"];
}) {
  noStore();

  const formattedSlug = typeof slug === "object" ? slug.join("/") : slug;

  try {
    const storyblokApi = getStoryblokApi();

    const { data } = await storyblokApi.get(`cdn/stories/${formattedSlug}`, {
      version: getStoryblokAccessVersion(),
      resolve_links: resolveLinks,
      resolve_relations: resolveRelations,
    });
    return data;
  } catch (error) {
    console.error(
      `fetchStoryblokStory – Error when fetching Storyblok story for slug ${formattedSlug}`,
      error,
    );
  }
}
