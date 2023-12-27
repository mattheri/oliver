import type { ReactNode } from "react"
import useUser from "~/auth/hooks/useUser";
import type { User, UserActions } from "~/auth/types"
import { If } from "~/common";

import CanIContext from "./CanIContext"

type Props = {
	canI: UserActions;
	children?: ReactNode | ((props: { action: UserActions, user: User | null }) => ReactNode);
	ressource?: {
		owner?: User;
		allowView?: string[];
		allowEdit?: string[];
		allowDelete?: string[];
	}
}

export default function CanI({ children, canI, ressource }: Props) {
	const isFunction = typeof children === 'function';
	const user = useUser();
	const isOwner = ressource?.owner?.id === user?.id;
	const canDelete = !!(user && (ressource?.allowDelete?.includes(user.email) || isOwner));
	const canEdit = !!(user && (ressource?.allowEdit?.includes(user.email) || canDelete || isOwner));
	const canView = !!(user && (ressource?.allowView?.includes(user.email) || canEdit || canDelete || isOwner));

	return (
		<CanIContext.Provider value={{ canI }}>
			<If condition={!isFunction && (canView || canEdit || canDelete || isOwner)}>
				<If.Then>
					{isFunction ? children({ action: canI, user }) : children}
				</If.Then>
			</If>
		</CanIContext.Provider>
	)
}