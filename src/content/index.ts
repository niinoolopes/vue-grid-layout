import { GridItemData, ItemMp3, ItemType } from "@/types"

export const gridItemData: GridItemData = {
	id: '',
	active: true,
	name: 'Alert',
	type: 'alert',
	props: {}
}

export const itemTypesData: ItemType[] = [
	{ value: 'alarme', name: 'Alarme', disabled: true },
	{ value: 'alert', name: 'Alerta', disabled: false },
	{ value: 'page', name: 'Página', disabled: false },
	{ value: 'pomodoro', name: 'Pomodoro', disabled: false },
	{ value: 'todo', name: 'Todo', disabled: false },
]

export const itemMp3ListData: ItemMp3[] = [
	{
		name: 'Dinner Chimes - The U.S. Marine Corps Band',
		fileName: 'dinner-chimes-the-u.s.-marine-corps-band',
	},
	{
		name: 'Granite (Sting) - Ethan Meixsell',
		fileName: 'granite-(sting)-ethan-meixsell'
	},
	{
		name: 'Into the Depths (Sting) - Jingle Punks',
		fileName: 'into-the-depths-(sting)-jingle-punks'
	},
	{
		name: "Leslie's Strut (Sting) - John Deley and the 41 Players",
		fileName: 'leslies-strut-(sting)-john-deley-and-the-41-Players'
	},
]