import { RootState } from "@/types";
import { ActionContext } from "vuex";

export default {
	setLogged(context: ActionContext<RootState, RootState>, status: boolean) {
		context.commit('SET_LOGGED', status)
	}
}