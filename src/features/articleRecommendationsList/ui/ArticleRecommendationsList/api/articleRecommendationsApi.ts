import { rtkApi } from "shared/api/rtkApi"

const getArticleRecommendationsList = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRecommendationsList: build.query({
			query: (limit) => ({
				url: '/articles',
				params: {
					_limit: limit
				}
			})
		})
	}),
	overrideExisting: false
})

export const useArticleRecommendationsList = getArticleRecommendationsList.useGetArticleRecommendationsListQuery