import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import styles from './ArticleDetailsPage.module.scss'
import { Page } from 'widgets/Page/Page'

import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { VStack } from 'shared/ui/Stack'
import { ArticleRecommendationsList } from 'features/articleRecommendationsList'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'

interface ArticleDetailsPageProps {
	className?: string
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props
	const { t } = useTranslation()
	const { id } = useParams<{ id: string }>()

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
				<VStack gap='16' max>
					<ArticleDetailsPageHeader />
					<ArticleDetails id={id} />
					<ArticleRecommendationsList />
					<ArticleDetailsComments id={id} />
				</VStack>
			</Page>
		</DynamicModuleLoader>
	)
}

export default memo(ArticleDetailsPage)
