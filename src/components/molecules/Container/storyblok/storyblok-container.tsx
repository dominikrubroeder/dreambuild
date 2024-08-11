import { ContainerStoryblok } from "../../../../../component-types-sb";
import { cn } from "@/lib/utils";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

export default function StoryblokContainer({
  blok,
}: {
  blok: ContainerStoryblok;
}) {
  const backgroundColor = `bg-[${blok.background_color.value}]`;

  return (
    <section
      className={cn(
        "w-full",
        blok.padding,
        blok.max_width,
        blok.alignment,
        blok.rounded,
        backgroundColor,
      )}
      {...storyblokEditable(blok)}
    >
      {blok.padding_top && blok.padding_top.length > 0 && (
        <StoryblokComponent blok={blok.padding_top[0]} />
      )}

      <div
        className={cn(
          "w-full",
          blok.layout,
          blok.gap,
          blok.inner_padding,
          blok.inner_max_width,
          blok.inner_alignment,
        )}
      >
        {blok.body?.map((nestedBlok) => (
          <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
        ))}
      </div>

      {blok.padding_bottom && blok.padding_bottom.length > 0 && (
        <StoryblokComponent blok={blok.padding_bottom[0]} />
      )}
    </section>
  );
}
