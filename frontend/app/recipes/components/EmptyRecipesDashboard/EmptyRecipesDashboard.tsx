import { PencilIcon, LinkIcon } from "@heroicons/react/24/outline";

import { ActionCard } from "~/common";

import RandomRecipesSlider from "../RandomRecipesSlider/RandomRecipesSlider";

export default function EmptyRecipesDashboard() {
  return (
    <div className="relative">
      <h2 className="text-base font-semibold leading-6 text-gray-900">
        Recipes
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        You didn’t add any recipes yet. Start by adding your first recipe.
      </p>
      <ul
        role="list"
        className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2"
      >
        <li className="flow-root">
          <ActionCard
            heading="Add a custom recipe"
            description="Create a custom recipe from scratch."
            to="/recipes/custom/create"
            icon={PencilIcon}
          />
        </li>
        <li className="flow-root">
          <ActionCard
            heading="Add a recipe from a URL"
            description="Import a recipe from a URL."
            to="/recipes/url/create"
            icon={LinkIcon}
            background="bg-green-500"
          />
        </li>
      </ul>
      <div>
        <RandomRecipesSlider />
      </div>
    </div>
  );
}
