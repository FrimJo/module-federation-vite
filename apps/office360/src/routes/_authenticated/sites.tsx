import { AnyRoute, createRoute } from "@tanstack/react-router";

export const Route = createRoute({
  path: "/sites",
  getParentRoute: (): AnyRoute => {
    throw new Error("Page '/_authenticated/sites' not added to router.");
  },
  component: SitesPage,
});

function SitesPage() {
  return <>SitesPage</>;
}
