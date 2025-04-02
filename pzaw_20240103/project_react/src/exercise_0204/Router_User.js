import { createRouter, RouterProvider } from "@tanstack/react-router";
import { createRoute, createRootRoute } from "@tanstack/react-router";
import User_table from "./User_table";
import User_Add from "./User_Add";

const rootRoute = createRootRoute({
  component: ({ children }) => <>{children}</>,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: User_table,
});

const addUserRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/add-user",
  component: User_Add,
});

const routeTree = rootRoute.addChildren([usersRoute, addUserRoute]);
const router = createRouter({ routeTree });

export default function Router_User() {
  return <RouterProvider router={router} />;
}
