import { GridItem } from "@/types";

export const getNextId = (items: GridItem[]): number => {
    const sortId = [...items].sort((a, b) => a.i < b.i ? 1 : 0)
    const lastItem = sortId.pop()

    return Number(lastItem?.i) + 1
}

export const fnOrderItems = (items: GridItem[]): GridItem[] => {
    return [...items].sort((a, b) => a.y > b.y ? 1 : -1)
}

export const fnLastItem = (items: GridItem[]): GridItem => {
    const lastIndex = items.length - 1
    return items[lastIndex]
}

export const prepareNewItem = ({ items, item }: { items: GridItem[], item: GridItem }) => {
    const list = fnOrderItems(items)
    const last = fnLastItem(list)

    item.w = 3
    item.h = 2
    item.x = 0
    item.y = last.y + 1
    item.i = last.i + 1

    return item
}