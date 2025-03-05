import { AnyRoute, createRoute, Outlet } from "@tanstack/react-router";

export const Route = createRoute({
  id: "/_authenticated",
  getParentRoute: (): AnyRoute => {
    throw new Error("Layout '/_authenticated' not added to router.");
  },
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      Authenticated
      <Outlet />
    </>
  );
}
