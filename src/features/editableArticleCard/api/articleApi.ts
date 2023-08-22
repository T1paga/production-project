import { rtkApi } from '@/shared/api/rtkApi'
import { Article } from '@/entities/Article'
import { AddArticle } from '../types/article'

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
		}),
		createArticle: build.mutation<void, AddArticle>({
			query: (newArticle) => ({
				url: `/articles`,
				method: 'POST',
				body: newArticle
			})
		}),
		deleteArticle: build.mutation<void, string>({
			query: (id) => ({
				url: `/articles/${id}`,
				method: 'DELETE'
			})
		})
	})
})

export const useGetArticleById = articleApi.useGetArticleByIdQuery
export const useUpdateArticle = articleApi.useUpdateArticleMutation
export const useCreateArticle = articleApi.useCreateArticleMutation
export const useDeleteArticle = articleApi.useDeleteArticleMutation