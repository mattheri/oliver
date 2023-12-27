import { cx } from "cva";
import { If, Image } from "~/common";
import type { Recipe } from "~/recipes/types";

type Props = {
	image?: Recipe["image"];
	title?: Recipe["title"];
};

export default function RecipeHeaderSection({ image, title }: Props) {
	return (
		<section className="grid grid-cols-1 grid-rows-1 max-h-96">
			<If condition={!!image?.src}>
				<If.Then>
					<div className="col-start-1 col-end-2 row-start-1 row-end-2 overflow-hidden">
						<Image {...image!} alt={title} className="w-full bg-cover bg-top block max-w-full h-auto" />
					</div>
				</If.Then>
			</If>
			<div className="col-start-1 col-end-2 row-start-1 row-end-2 grid place-items-center">
				<h1 className={cx("text-3xl font-bold text-center", {
					"bg-black text-white p-2": !!image?.src,
				})}>{title}</h1>
			</div>
		</section>
	);
}