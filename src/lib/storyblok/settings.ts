import { apiPlugin } from "@storyblok/react/rsc";
import { getStoryblokAccessToken } from "@/lib/storyblok/helpers";
import StoryblokPage from "@/components/templates/storyblok/storyblok-page";

export const storyblokSettings = {
  accessToken: getStoryblokAccessToken(),
  use: [apiPlugin],
  components: {
    page: StoryblokPage,
  },
};
