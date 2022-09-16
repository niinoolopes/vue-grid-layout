import gridList from '@/content/grid-list'
import { LocalStorageData } from "@/types"

export default {
	getLocalStorage(): LocalStorageData {
		const storageInitial: LocalStorageData = {
			logged: false,
			edit: false,
			items: []
		}

		const storage = window.localStorage.getItem('p-vue-grid-layout')

		if (!storage) {
			window.localStorage.setItem('p-vue-grid-layout', JSON.stringify(storageInitial))
		}

		const storageParse = storage ? JSON.parse(storage) : {}

		const data: LocalStorageData = {
			...storageInitial,
			...storageParse
		}

		if (data.items.length === 0) {
			data.items = gridList
		}

		return data
	}
}