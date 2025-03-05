import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const internalRoutes = createRouter({ routeTree }).routesById["/_layout"]
  .children;

export const LayoutLazyImport = createRouter({ routeTree }).routesById[
  "/_layout"
];
