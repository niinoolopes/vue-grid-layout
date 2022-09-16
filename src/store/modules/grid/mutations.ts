import { GridItem, GridState } from "@/types";

export default {
    SET_ITEMS(state: GridState, payload: GridItem[]) {
        state.items = payload
    },
    SET_EDIT(state: GridState, payload: boolean) {
        state.edit = payload
    },
}