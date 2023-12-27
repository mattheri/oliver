import { Button, If } from "~/common";
import type { Recipe } from "~/recipes/types";

import { LinkIcon } from "@heroicons/react/24/outline";

type Props = {
	prepTime?: Recipe["prepTime"];
	cookTime?: Recipe["cookTime"];
	servings?: Recipe["servings"];
	externalUrl?: Recipe["url"];
	mainIngredient?: Recipe["mainIngredient"];
}

export default function RecipeMetadata({ prepTime, cookTime, servings, externalUrl, mainIngredient }: Props) {
	return (
		<section className="flex flex-wrap items-center gap-y-2 gap-x-4 py-2 text-gray-900">
			<If condition={!!prepTime}>
				<If.Then>
					<span className="text-sm">
						Preparation: {prepTime}
					</span>
				</If.Then>
			</If>
			<If condition={!!cookTime}>
				<If.Then>
					<span className="text-sm">
						Cooking: {cookTime}
					</span>
				</If.Then>
			</If>
			<If condition={!!servings}>
				<If.Then>
					<span className="text-sm">
						Serves: {servings}
					</span>
				</If.Then>
			</If>
			<If condition={!!mainIngredient}>
				<If.Then>
					<span className="text-sm">
						Main Ingredient: {mainIngredient}
					</span>
				</If.Then>
			</If>
			<If condition={!!externalUrl}>
				<If.Then>
			<Button intent="secondary" to={externalUrl!}>
				<LinkIcon className="h-5 w-5" aria-hidden="true" />
				Source
					</Button>
				</If.Then>
			</If>
		</section>
	);
}