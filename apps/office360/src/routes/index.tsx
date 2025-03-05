import { AnyRoute, createRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";

export const Route = createRoute({
  path: "/",
  getParentRoute: (): AnyRoute => {
    throw new Error("Page '/' not added to router.");
  },
  component: IndexPage,
});

function IndexPage() {
  const navigate = useNavigate();
  return (
    <div>
      Hello "/"!
      <button
        onClick={() => navigate({ to: "/word/$", params: { _splat: "works" } })}
      >
        Go to CW
      </button>
    </div>
  );
}
