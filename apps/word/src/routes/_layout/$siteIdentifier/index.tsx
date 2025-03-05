import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/$siteIdentifier/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { siteIdentifier } = Route.useParams();

  return <div>{siteIdentifier}</div>;
}
