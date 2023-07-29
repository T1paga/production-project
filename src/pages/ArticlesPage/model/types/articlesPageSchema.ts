import { type EntityState } from "@reduxjs/toolkit"
import type { ArticleView, Article, ArticleSortField, ArticleType } from "entities/Article"
import { type sortOrder } from "shared/types"

export interface ArticlesPageSchema extends EntityState<Article> {
	isLoading?: boolean
	error?: string

	view: ArticleView

	// pagination
	page: number
	limit?: number
	hasMore: boolean

	// filters
	order: sortOrder
	sort: ArticleSortField
	search: string
	type: ArticleType

	_inited: boolean
}