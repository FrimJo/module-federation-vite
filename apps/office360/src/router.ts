import { AnyRoute, createRoute, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const CWInternalRoutes = await import("word/expose").then(
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

const CWRoute = createRoute({
  path: "/word",
  getParentRoute: () => AuthenticatedLayoutRoute,
}).addChildren(
  CWInternalRoutes.map((route: AnyRoute) =>
    route.update({
      getParentRoute: () => CWRoute,
    } as any),
  ),
);

AuthenticatedLayoutRoute.addChildren([
  ...AuthenticatedLayoutRoute.children,
  CWRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
