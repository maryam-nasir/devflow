type SignInWithOAuthParams = {
  provider: "github" | "google";
  providerAccountId: string;
  user: {
    username: string;
    name: string;
    email: string;
    image: string;
  };
};
