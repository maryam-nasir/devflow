import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = () => {
  return (
    <>
      <h1 className="h1-bold">Welcome to the world of Next.js</h1>
      <h1 className="h1-bold font-inter">
        Welcome to the world of Next.js (Inter)
      </h1>
      <h1 className="h1-bold font-space-grotesk">
        Welcome to the world of Next.js (Inter)
      </h1>
      <form
        className="px-4 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({
            redirectTo: ROUTES.SIGN_IN,
          });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
};

export default Home;
