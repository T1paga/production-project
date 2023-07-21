import { type StateSchema } from "app/providers/StoreProvider"
import { type ArticleView } from "entities/Article"

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || "SMALL" as ArticleView