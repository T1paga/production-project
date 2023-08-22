import { ArticleBlock, ArticleType } from "@/entities/Article"

export interface AddArticle {
	id: string
	title: string
	userId: string
	subtitle: string
	img: string
	views: number
	createdAt: string
	type: ArticleType[]
	blocks: ArticleBlock[]
	user?: any
}