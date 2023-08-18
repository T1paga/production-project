import { rtkApi } from '@/shared/api/rtkApi'
import { Article } from '@/entities/Article'

const articleApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleById: build.query<Article, string>({
			query: (id) => ({
				url: `/articles/${id}`
			})
		}),
		updateArticle: build.mutation<void, { id: string, updatedArticle: Partial<Article> }>({
			query: ({ id, updatedArticle }) => ({
				url: `/articles/${id}`,
				method: 'PATCH',
				body: updatedArticle
			})
		})
	})
})

export const useGetArticleById = articleApi.useGetArticleByIdQuery
export const useUpdateArticle = articleApi.useUpdateArticleMutation