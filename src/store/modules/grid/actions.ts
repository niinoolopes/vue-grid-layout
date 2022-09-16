import { RootState, GridState, GridItem, GridItemProps, GridItemData } from "@/types";
import { ActionContext } from "vuex";
import { localStorageUpdateKey } from '@/utils/localStorage'
import GridTypeProps from '@/content/grid-type-props'
import GridNameTypes from '@/content/grid-name-types'

export default {
	setItems(context: ActionContext<GridState, RootState>, items: GridItem[]) {
		context.commit('SET_ITEMS', items)
	},

	setEdit(context: ActionContext<GridState, RootState>, status: boolean) {
		context.commit('SET_EDIT', status)
	},

	toggleEdit(context: ActionContext<GridState, RootState>) {
		context.commit('SET_EDIT', !context.state.edit)
	},

	addItem(context: ActionContext<GridState, RootState>, item: GridItem) { 
		const items = context.state.items

		items.push(item)

		context.commit('SET_ITEMS', items)

		localStorageUpdateKey({
			key: 'items',
			value: items
		})
	},

	removeItem(context: ActionContext<GridState, RootState>, item: GridItem) {
		const items = context.state.items

		const newItems = items.filter(el => el.data.id !== item.data.id)

		context.commit('SET_ITEMS', newItems)

		localStorageUpdateKey({
			key: 'items',
			value: newItems
		})
	},

	toggleActive(context: ActionContext<GridState, RootState>, item: GridItem) {
		const items = context.state.items

		const newItems = items.map(el => {
			if (el.data.id === item.data.id) {
				el.data.active = !item.data.active
			}
			return el
		})

		context.commit('SET_ITEMS', newItems)

		localStorageUpdateKey({
			key: 'items',
			value: newItems
		})
	},

	updateItemData(context: ActionContext<GridState, RootState>, { id, data }: { id: string, data: GridItemData }) {
		const items = context.state.items

		const newItems = items.map(el => {
			if (el.data.id === id) {
				const newData = {...el.data}

				if('type' in data && el.data.type !== data.type) {
					const newProp = GridTypeProps[data.type]
					const newName = GridNameTypes[data.type]
			
					newData.type = data.type
					newData.name = newName
					newData.props = newProp
				}

				el.data = newData
			}
			return el
		})

		context.commit('SET_ITEMS', newItems)

		localStorageUpdateKey({
			key: 'items',
			value: newItems
		})
	},

	updateItemProps(context: ActionContext<GridState, RootState>, { id, props }: { id: string, props: GridItemProps }) {
		const items = context.state.items

		const newItems = items.map(el => {
			if (el.data.id === id) {
				el.data.props = {
					...el.data.props,
					...props,
				}
			}
			return el
		})

		context.commit('SET_ITEMS', newItems)

		localStorageUpdateKey({
			key: 'items',
			value: newItems
		})
	},

}