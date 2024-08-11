import {
  MARK_BOLD,
  MARK_LINK,
  MARK_UNDERLINE,
  NODE_HEADING,
  NODE_OL,
  NODE_PARAGRAPH,
  NODE_UL,
  render,
} from "storyblok-rich-text-react-renderer";
import { StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";
import StoryblokSpacer from "@/components/atoms/Spacer/storyblok";
import {
  RichtextStoryblok,
  SpacerStoryblok,
} from "../../../../../../component-types-sb";

export function useRenderRichTextField(blok: RichtextStoryblok | undefined) {
  if (blok === null || blok === undefined) return null;

  return render(blok, {
    markResolvers: {
      [MARK_BOLD]: (children) => (
        <strong className="font-bold">{children}</strong>
      ),
      [MARK_UNDERLINE]: (children) => (
        <u className="hover:text-foreground">{children}</u>
      ),
      [MARK_LINK]: (children, props) => {
        const { linktype, href, target } = props;

        if (linktype === "email") {
          // Email links: add `mailto:` scheme and map to <a>
          return (
            <a
              href={`mailto:${href}`}
              className="transition hover:text-foreground"
            >
              {children}
            </a>
          );
        }

        if (href && href.match(/^(https?:)?\/\//)) {
          // External links: map to <a>
          return (
            <a
              href={href}
              target={target}
              className="transition hover:text-foreground"
            >
              {children}
            </a>
          );
        }

        return (
          <Link
            href={href ?? "/"}
            className="cursor-pointer text-primary"
            prefetch
          >
            {children}
          </Link>
        );
      },
    },
    nodeResolvers: {
      [NODE_HEADING]: (children, { level }) => {
        switch (level) {
          case 1:
            return <h1 className="title-2xl mb-2">{children}</h1>;
          case 2:
            return <h2 className="title-xl mb-1">{children}</h2>;
          case 3:
            return <h3 className="title-xl mb-1">{children}</h3>;
          case 4:
            return <h4 className="title-base mb-1">{children}</h4>;
          case 5:
            return <h5 className="title-base mb-1">{children}</h5>;
          case 6:
            return <h6 className="title-base mb-1">{children}</h6>;
          default:
            return <div>{children}</div>;
        }
      },
      [NODE_PARAGRAPH]: (children) => {
        if (children === null) return <br />;

        return <p>{children}</p>;
      },
      [NODE_UL]: (children) => {
        return <ul className="list-disc pl-4">{children}</ul>;
      },
      [NODE_OL]: (children) => {
        return <ol className="list-decimal pl-6">{children}</ol>;
      },
    },
    blokResolvers: {
      ["spacer"]: (props) => {
        const blok = props as SpacerStoryblok;
        return <StoryblokSpacer blok={blok} />;
      },
    },
    defaultBlokResolver: (name, props) => {
      const blok = { ...props, component: name };
      return <StoryblokComponent blok={blok} key={props._uid} />;
    },
  });
}
