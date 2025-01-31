const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",

  COMMUNITY: "/community",
  COLLECTIONS: "/collections",
  JOBS: "/jobs",
  TAGS: "/tags",
  PROFILE: "/profile",
  ASK_QUESTION: "/ask-question",

  QUESTION: (id: string) => `/question/${id}`,
  TAG: (id: string) => `/tags/${id}`,
};

export default ROUTES;
