// Import the generated route tree
import { AnyRoute, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const {
  AuthenticatedLayoutImport,
  AuthenticationLoginCallbackImport,
  AuthenticationLoginImport,
} = await import("office360/expose").then((model) => model.default);

const AuthenticatedLayoutRoute: AnyRoute = AuthenticatedLayoutImport.update({
  getParentRoute: () => routeTree,
});

const AuthenticationLoginCallbackRoute: AnyRoute =
  AuthenticationLoginCallbackImport.update({
    getParentRoute: () => routeTree,
  });

const AuthenticationLoginRoute: AnyRoute = AuthenticationLoginImport.update({
  getParentRoute: () => routeTree,
});

const children =
  Array.isArray(routeTree.children) &&
  routeTree.children?.map((route: AnyRoute) =>
    route.update({
      getParentRoute: () => AuthenticatedLayoutRoute,
    } as any),
  );

const router = createRouter({
  routeTree: routeTree.addChildren([
    AuthenticatedLayoutRoute.addChildren(children || []),
    AuthenticationLoginRoute,
    AuthenticationLoginCallbackRoute,
  ]),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
