import gridList from '@/content/grid-list'
import { LocalStorageData, LocalStorageValues } from "@/types"
import { v4 as uuidv4 } from 'uuid';

const storageInitial: LocalStorageData = {
	logged: false,
	edit: false,
	items: []
}

export const localStorageUpdateKey = ({ key, value, storage }: {
	key: string,
	value: LocalStorageValues
	storage?: LocalStorageData
}) => {

	let data = storage
		? storage
		: (() => {
			const content = window.localStorage.getItem('p-vue-grid-layout')
			return content ? JSON.parse(content) : storageInitial
		})()

	data = {
		...data,
		[key]: value
	}
	
	window.localStorage.setItem('p-vue-grid-layout', JSON.stringify(data))
}

export const localStorage = (): LocalStorageData => {
	let gridInitial = false

	const storage = window.localStorage.getItem('p-vue-grid-layout')

	if (!storage) {
		gridInitial = true

		window.localStorage.setItem('p-vue-grid-layout', JSON.stringify(storageInitial))
	}

	const storageParse = storage ? JSON.parse(storage) : {}

	const data: LocalStorageData = {
		...storageInitial,
		...storageParse
	}

	if (data.items.length === 0) {
		const newItems = gridList.map(item => ({
			...item,
			data: {
				...item.data,
				id: uuidv4()
			}
		}))

		data.items = newItems
	}

	if (gridInitial) {
		localStorageUpdateKey({
			key: 'items',
			value: data.items,
			storage: data
		})
	}
	return data
}