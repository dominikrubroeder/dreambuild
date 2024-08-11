import { apiPlugin } from "@storyblok/react/rsc";
import { getStoryblokAccessToken } from "@/lib/cms/storyblok/helpers";
import StoryblokPage from "@/components/templates/storyblok/storyblok-page";
import StoryblokSpacer from "@/components/atoms/Spacer/storyblok";
import StoryblokRichTextField from "@/components/atoms/RichTextField/storyblok";
import StoryblokContainer from "@/components/molecules/Container/storyblok/storyblok-container";

export const storyblokSettings = {
  accessToken: getStoryblokAccessToken(),
  use: [apiPlugin],
  components: {
    page: StoryblokPage,
    container: StoryblokContainer,
    richtextfield: StoryblokRichTextField,
    spacer: StoryblokSpacer,
  },
};
