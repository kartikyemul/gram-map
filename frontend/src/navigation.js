import { useEffect, useState } from "react";

export const navItems = [
  { route: "dashboard", label: "Dashboard" },
  { route: "villages", label: "Villages" },
  { route: "plots", label: "Land Plots" },
  { route: "requests", label: "Requests" },
  { route: "reports", label: "Reports" },
];

const validRoutes = [...navItems.map((item) => item.route), "profile"];

function readRoute() {
  const name = window.location.hash.replace("#/", "").split("/")[0];
  return validRoutes.includes(name) ? name : "dashboard";
}

export function getTitle(route) {
  if (route === "profile") {
    return "My Profile";
  }
  const item = navItems.find((entry) => entry.route === route);
  return item ? item.label : "Dashboard";
}

export function useRoute() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    function update() {
      setRoute(readRoute());
      window.scrollTo(0, 0);
    }
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return route;
}
