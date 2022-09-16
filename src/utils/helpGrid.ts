import { gridItemData } from "@/content"
import { GridItem } from "@/types"
import { v4 as uuidv4 } from 'uuid'

export const gridItemNew = ({ items }: { items: GridItem[] }) => {
	const lastIndex = items.length - 1

	function nextI(): number {
		const sort = items.sort((a, b) => a.i > b.i ? 1 : -1)
		return sort[lastIndex].i + 1
	}

	function nextY() {
		const sort = items.sort((a, b) => a.y > b.y ? 1 : -1)
		return sort[lastIndex].i + 1
	}

	const newItem: GridItem = {
		h: 2,
		w: 3,
		x: 0,
		y: nextY(),
		i: nextI(),
		data: {
			...gridItemData,
			id: uuidv4()
		},
	}

	return newItem
}