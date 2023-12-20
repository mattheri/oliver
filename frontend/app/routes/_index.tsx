import type { V2_MetaFunction } from "@remix-run/node";
import RecipesDashboard from "~/recipes/components/RecipesDashboard/RecipesDashboard";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="section-container pt-16">
      <RecipesDashboard />
    </main>
  );
}
