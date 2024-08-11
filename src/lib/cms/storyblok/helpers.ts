import { ISbStoriesParams } from "@storyblok/react";

export function getStoryblokAccessToken() {
  return process.env.STORYBLOK_ACCESS_TOKEN;
}

export function getStoryblokAccessVersion() {
  return process.env.STORYBLOK_ACCESS_VERSION as ISbStoriesParams["version"];
}
