import { createSelector } from "@reduxjs/toolkit"
import { type StateSchema } from "app/providers/StoreProvider"

export const getUIscroll = (state: StateSchema) => state.ui.scroll
export const getUIscrollByPath = createSelector(
	getUIscroll,
	(state: StateSchema, path: string) => path,
	(scroll, path) => scroll[path] || 0
)