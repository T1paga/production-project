import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleView, type Article } from 'entities/Article'
import type { ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const articlesAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
	(state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
	name: 'articlesPageSlice',
	initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
		view: "SMALL" as ArticleView,
		page: 1,
		hasMore: true
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload
			localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		initState: state => {
			const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView
			state.view = view
			state.limit = view === "BIG" as ArticleView ? 4 : 9
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesList.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchArticlesList.fulfilled, (
				state,
				action: PayloadAction<Article[]>
			) => {
				state.isLoading = false
				articlesAdapter.addMany(state, action.payload)
				state.hasMore = action.payload.length > 0
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
})

export const {
	reducer: articlesPageReducer,
	actions: articlesPageActions
} = articlesPageSlice
