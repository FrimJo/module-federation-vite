import { AnyRoute, createRoute, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const WordInternalRoutes = await import("word/expose").then(
  (model) => model.default.internalRoutes,
);

const AuthenticatedLayoutRoute = Array.isArray(routeTree.children)
  ? routeTree.children?.find(
      (route): route is AnyRoute =>
        "id" in route.options && route.options.id === "/_authenticated",
    )
  : null;

if (AuthenticatedLayoutRoute == null)
  throw new Error(`Route not found: /_authenticated`);

const WordRoute = createRoute({
  path: "/word",
  getParentRoute: () => AuthenticatedLayoutRoute,
}).addChildren(
  WordInternalRoutes.map((route: AnyRoute) =>
    route.update({
      getParentRoute: () => WordRoute,
    } as any),
  ),
);

AuthenticatedLayoutRoute.addChildren([
  ...AuthenticatedLayoutRoute.children,
  WordRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
