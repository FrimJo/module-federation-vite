import { AnyRoute, createRoute } from "@tanstack/react-router";

export const Route = createRoute({
  path: "/authentication/login",
  getParentRoute: (): AnyRoute => {
    throw new Error("Page '/authentication/login' not added to router.");
  },
  component: LoginPage,
});

function LoginPage() {
  return <>Login</>;
}
