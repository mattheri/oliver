import { useContext } from "react"

import UserContext from "../store/UserContext/UserContext"

export default function useUser() {
	const { user } = useContext(UserContext);

	return user;
}