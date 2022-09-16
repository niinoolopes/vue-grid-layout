// GRID
export type GridItemNameType = 'Pomodoro' | 'Alerta' | 'Alarme' | 'Página' | 'Todo'

export type GridItemType = 'pomodoro' | 'alert' | 'alarme' | 'page' | 'todo'

export type GridItemProps = Record<string, unknown>

export type GridItemData = {
  id: string,
  active: boolean,
  name: string,
  type: GridItemType,
  props: GridItemProps
}

export interface GridItem {
  x: number,
  y: number,
  w: number,
  h: number,
  i: number,
  data: GridItemData
}
export interface Grid {
  items: GridItem[],
  edit: boolean
}
export interface ItemType {
  value: GridItemType
  name: GridItemNameType
  disabled: boolean
}

// PANEL
export interface Panel {
  name: string
  status: boolean
  settingItem: Record<string, unknown>
  settingItems: Record<string, unknown>
}

export interface RootState {
  logged: boolean
}

// STORE
export type GridState = Grid

export type PanelState = Panel

export type LocalStorageValues = boolean | GridItem[]

export type LocalStorageData = {
  logged: boolean,
  edit: boolean,
  items: GridItem[]
}

// ALL
export type ItemMp3 = {
  name: string
  fileName: string
}