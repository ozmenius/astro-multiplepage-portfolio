import { siteConfig, aboutContent, projectsContent } from "../config/content";

const FALLBACK_ORIGIN = "https://dennisozmen.com";

/** Minimal post shape needed for schema — a subset of utils/getPosts `Post`. */
export type PostLike = {
  title: string;
  description?: string;
  date?: string;
  image?: string;
  slug: string;
};

export function getOrigin(site: URL | undefined): string {
  return site ? site.origin : FALLBACK_ORIGIN;
}

const abs = (origin: string, path: string) =>
  `${origin}${path.startsWith("/") ? path : `/${path}`}`;

/** Reusable Person node — referenced across pages via its @id. */
export function personNode(origin: string) {
  return {
    "@type": "Person",
    "@id": `${origin}/#dennis`,
    name: "Dennis Özmen",
    url: `${origin}/`,
    image: abs(origin, "/assets/images/about/dennis-oezmen.png"),
    jobTitle: "Team Lead, SEO",
    description: siteConfig.description,
    email: siteConfig.social.email.replace("mailto:", ""),
    worksFor: { "@type": "Organization", name: "Neil Patel Digital" },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Heinrich-Heine-Universität Düsseldorf",
      },
      { "@type": "CollegeOrUniversity", name: "University of Duisburg-Essen" },
    ],
    knowsLanguage: ["German", "Turkish", "English"],
    knowsAbout: [
      "Search Engine Optimization",
      "Generative Engine Optimization",
      "Conversion Rate Optimization",
      "Email Marketing",
      "Content Strategy",
      "Marketing Automation",
    ],
    sameAs: [siteConfig.social.linkedin],
  };
}

function websiteNode(origin: string) {
  return {
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    url: `${origin}/`,
    name: "Dennis Özmen",
    description: siteConfig.description,
    publisher: { "@id": `${origin}/#dennis` },
    inLanguage: "en",
  };
}

/** Homepage: WebSite + Person. */
export function homeSchema(origin: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [websiteNode(origin), personNode(origin)],
  };
}

/** About page: ProfilePage with the Person as its main entity. */
export function aboutSchema(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${origin}/about/#profilepage`,
    url: `${origin}/about/`,
    name: aboutContent.meta.title,
    description: aboutContent.meta.description,
    inLanguage: "en",
    mainEntity: personNode(origin),
  };
}

/** Contact page: ContactPage with the Person as its main entity. */
export function contactSchema(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${origin}/contact/#contactpage`,
    url: `${origin}/contact/`,
    name: "Contact — Dennis Özmen",
    description:
      "Get in touch with Dennis Özmen about SEO, GEO, and digital marketing.",
    inLanguage: "en",
    mainEntity: personNode(origin),
  };
}

/** Projects listing: CollectionPage with an ItemList of the case studies. */
export function projectsSchema(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${origin}/projects/#collection`,
    url: `${origin}/projects/`,
    name: projectsContent.meta.title,
    description: projectsContent.meta.description,
    inLanguage: "en",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projectsContent.projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: abs(origin, project.href),
        name: project.name,
      })),
    },
  };
}

/** Project detail: CreativeWork (case study) + BreadcrumbList + Person. */
export function projectSchema(
  origin: string,
  project: (typeof projectsContent.projects)[number]
) {
  const url = abs(origin, project.href);
  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(origin),
      {
        "@type": "CreativeWork",
        "@id": `${url}#case-study`,
        name: project.name,
        headline: project.title,
        description: project.summary,
        image: abs(origin, project.image),
        url,
        inLanguage: "en",
        about: project.category,
        keywords: project.services.join(", "),
        author: { "@id": `${origin}/#dennis` },
        creator: { "@id": `${origin}/#dennis` },
        isPartOf: { "@id": `${origin}/projects/#collection` },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${origin}/projects/`,
          },
          { "@type": "ListItem", position: 3, name: project.name, item: url },
        ],
      },
    ],
  };
}

const postUrl = (origin: string, slug: string) => `${origin}/posts/${slug}/`;

/** Blog listing: Blog node with a BlogPosting entry per article. */
export function postsSchema(origin: string, posts: PostLike[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${origin}/posts/#blog`,
    url: `${origin}/posts/`,
    name: "Blog — Dennis Özmen",
    description: "Articles and notes on SEO, GEO, and digital marketing.",
    inLanguage: "en",
    publisher: { "@id": `${origin}/#dennis` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description || undefined,
      url: postUrl(origin, post.slug),
      image: post.image ? abs(origin, post.image) : undefined,
      datePublished: post.date || undefined,
    })),
  };
}

/** Blog article: BlogPosting + BreadcrumbList + Person. */
export function postSchema(origin: string, post: PostLike) {
  const url = postUrl(origin, post.slug);
  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(origin),
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        headline: post.title,
        description: post.description || undefined,
        image: post.image ? abs(origin, post.image) : undefined,
        datePublished: post.date || undefined,
        dateModified: post.date || undefined,
        url,
        mainEntityOfPage: url,
        inLanguage: "en",
        author: { "@id": `${origin}/#dennis` },
        publisher: { "@id": `${origin}/#dennis` },
        isPartOf: { "@id": `${origin}/posts/#blog` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${origin}/posts/`,
          },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}
