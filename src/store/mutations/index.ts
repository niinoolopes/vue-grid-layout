import { RootState } from "@/types";

export default {
	SET_LOGGED(state: RootState, payload: boolean) {
		state.logged = payload
	}
}