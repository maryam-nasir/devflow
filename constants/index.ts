import ROUTES from "./routes";

export const sidebarLinks = [
  {
    imageUrl: "/icons/home.svg",
    route: ROUTES.HOME,
    label: "Home",
  },
  {
    imageUrl: "/icons/users.svg",
    route: ROUTES.COMMUNITY,
    label: "Community",
  },
  {
    imageUrl: "/icons/star.svg",
    route: ROUTES.COLLECTIONS,
    label: "Collections",
  },
  {
    imageUrl: "/icons/suitcase.svg",
    route: ROUTES.JOBS,
    label: "Find Jobs",
  },
  {
    imageUrl: "/icons/tag.svg",
    route: ROUTES.TAGS,
    label: "Tags",
  },
  {
    imageUrl: "/icons/user.svg",
    route: ROUTES.PROFILE,
    label: "Profile",
  },
  {
    imageUrl: "/icons/question.svg",
    route: ROUTES.ASK_QUESTION,
    label: "Ask a question",
  },
];
