/* eslint-disable array-callback-return */
import { useTranslation } from 'react-i18next'
import styles from './EditableArticleCard.module.scss'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useGetArticleById, useUpdateArticle } from '../../api/articleApi'
import { Article } from '@/entities/Article'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Button } from '@/shared/ui/redesigned/Button'
import { useNavigate } from 'react-router-dom'
import { getRouteArticles } from '@/shared/const/router'
import { EditableArticleCardBlockInfo } from '../EditableArticleCardBlockInfo/EditableArticleCardBlockInfo'
import { EditableArticleCardMainInfo } from '../EditableArticleCardMainInfo/EditableArticleCardMainInfo'

interface EditableArticleCardProps {
	className?: string
	articleId: string
}

export const EditableArticleCard = memo((props: EditableArticleCardProps) => {
	const { className, articleId } = props
	const { t } = useTranslation()
	const { data, isLoading } = useGetArticleById(articleId)
	const oldValue = useRef<Article | null>(null)
	const [updateArticleMutation] = useUpdateArticle()
	const navigate = useNavigate()
	const [articleData, setArticleData] = useState<Article>({
		id: '',
		title: '',
		subtitle: '',
		img: '',
		blocks: [],
		createdAt: '',
		type: [],
		user: {
			id: '',
			username: ''
		},
		views: 0
	} as Article)

	useEffect(() => {
		if (!isLoading && data) {
			oldValue.current = data
			setArticleData(data)
		}
	}, [data, isLoading])

	const handleUpdateArticle = useCallback(
		() => {
			try {
				updateArticleMutation({
					id: articleData.id,
					updatedArticle: articleData
				})

				navigate(getRouteArticles())
				window.location.reload()
			} catch (e) {
				console.log(e)
			}
		},
		[articleData, navigate, updateArticleMutation]
	)

	const handleCancelUpdataArticle = () => {
		if (oldValue.current !== null) setArticleData(oldValue.current)
	}

	return (
		<div className={classNames(styles.EditableArticleCard, {}, [className])}>
			<VStack gap='24'>
				<EditableArticleCardMainInfo articleData={articleData} setArticleData={setArticleData} />
				<EditableArticleCardBlockInfo articleData={articleData} setArticleData={setArticleData} />

				<HStack justify='center' max gap='32'>
					<Button onClick={handleUpdateArticle}>
						Изменить статью
					</Button>
					<Button onClick={handleCancelUpdataArticle}>
						Отменить изменения
					</Button>
				</HStack>
			</VStack>
		</div>
	)
})