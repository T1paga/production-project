import { type ArticleDetailsCommentSchema } from "./ArticleDetailsCommentSchema"
import { type ArticleDetailsRecommendationsSchema } from "./articleDetailsRecommendationsSchema"

export interface ArticleDetailsPageSchema {
	comments: ArticleDetailsCommentSchema
	recommendations: ArticleDetailsRecommendationsSchema
}