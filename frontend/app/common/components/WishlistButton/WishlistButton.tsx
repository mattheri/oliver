import { cx } from 'cva'
import type { ButtonHTMLAttributes } from "react";

import { HeartIcon } from '@heroicons/react/24/outline'

import Button from "../Button/Button";
import If from "../If/If";

type Props = {
	isWishlist?: boolean;
	compact?: boolean;
	revalidateOnAdd?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

export default function WishlistButton({ isWishlist, children, compact = true, onClick, ...props }: Props) {
	return <Button {...props} type="button" intent="secondary" onClick={onClick}>
		<HeartIcon className={cx("h-5 w-5", { "text-red-600": isWishlist })} />
		<If condition={!compact}>
			<If.Then>
				<span className="ml-2">{isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</span>
			</If.Then>
		</If>
	</Button>
}