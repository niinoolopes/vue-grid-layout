import { GridItem } from "@/types";

const GridList: GridItem[] = [
  {
    x: 0,
    y: 0,
    w: 3,
    h: 2,
    i: 1,
    data: {
      id: '1',
      active: true,
      name: 'Pomodoro',
      type: 'pomodoro',
      props: {
        time: '00:00:03',
        fileName: 'dinner-chimes-the-u.s.-marine-corps-band'
      }
    },
  },
  {
    x: 0,
    y: 1,
    w: 3,
    h: 2,
    i: 2,
    data: {
      id: '2',
      active: true,
      name: 'Alerta',
      type: 'alert',
      props: {
        time: '15:12',
        message: 'mensagem de alerta'
      }
    },
  },
  {
    x: 3,
    y: 0,
    w: 9,
    h: 4,
    i: 3,
    data: {
      id: '3',
      active: true,
      name: 'Página',
      type: 'page',
      props: {
        url: '',
      }
    },
  },
  {
    x: 0,
    y: 2,
    w: 3,
    h: 2,
    i: 4,
    data: {
      id: '4',
      active: true,
      name: 'Todo',
      type: 'todo',
      props: {
        items: []
      }
    },
  },
]

export default GridList