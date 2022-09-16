import { PanelState } from "@/types";

export default {
	RESET(state: PanelState) {
		state.name = ''
		state.status = false
		state.settingItem = {}
		state.settingItems = {}
	},
	SET_NAME(state: PanelState, name: string) {
		state.name = name
	},
	SET_STATUS(state: PanelState, status: boolean) {
		state.status = status
	},
	SET_SETTING_ITEM(state: PanelState, payload: Record<string, unknown>) {
		state.settingItem = payload
	},
	SET_SETTING_ITEMS(state: PanelState, payload: Record<string, unknown>) {
		state.settingItems = payload
	}
}