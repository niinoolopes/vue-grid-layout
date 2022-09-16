import { GridItemProps, GridItemType } from "@/types"

const GridTypeProps: Record<GridItemType, GridItemProps> = {
	'pomodoro': {
		time: '00:00:03',
		fileName: 'dinner-chimes-the-u.s.-marine-corps-band'
	},
	'alert': {
		time: '',
		message: 'mensagem de alerta'
	},
	'page': {
		url: 'https://www.tecmundo.com.br/',
	},
	alarme: {},
	todo: {},
}

export default GridTypeProps