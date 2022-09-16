import { gridItemData } from "@/content";
import { RootState, GridState, GridItemData } from "@/types";
import { ActionContext } from "vuex";

export default {
	close(context: ActionContext<GridState, RootState>) {
		context.commit('RESET')
	},
	openSettingItem(context: ActionContext<GridState, RootState>, payload: Partial<GridItemData>) {
		context.commit('RESET')

		const data: GridItemData = {
			...gridItemData,
			...payload,
		}

		context.commit('SET_NAME', 'settingItem')
		context.commit('SET_SETTING_ITEM', data)
		context.commit('SET_STATUS', true)
	},
	resetSettingItem(context: ActionContext<GridState, RootState>) {
		context.commit('SET_SETTING_ITEM', {})
	},
	openSettingItems(context: ActionContext<GridState, RootState>) {
		context.commit('RESET')

		context.commit('SET_NAME', 'settingItems')
		// context.commit('SET_SETTING_ITEMS', {})
		context.commit('SET_STATUS', true)
	},
	resetSettingItems(context: ActionContext<GridState, RootState>) {
		context.commit('SET_SETTING_ITEMS', {})
	},
}