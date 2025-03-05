import { AnyRoute, createRoute } from "@tanstack/react-router";

export const Route = createRoute({
  path: "/authentication/login-callback",
  getParentRoute: (): AnyRoute => {
    throw new Error(
      "Page '/authentication/login-callback' not added to router.",
    );
  },
  component: LoginCallbackPage,
});

function LoginCallbackPage() {
  return <>LoginCallbackPage</>;
}
