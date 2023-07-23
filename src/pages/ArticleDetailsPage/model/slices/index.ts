import { combineReducers } from "@reduxjs/toolkit"
import { type ArticleDetailsPageSchema } from "../types"
import { articleDetailsPageRecomendationsReducer } from "./articleDetailsPageRecommendationsSlice"
import { articleDetailsCommentsReducer } from "./articleDetailsCommentSlice"

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>(
	{
		recommendations: articleDetailsPageRecomendationsReducer,
		comments: articleDetailsCommentsReducer
	}
)