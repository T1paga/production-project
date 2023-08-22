/* eslint-disable array-callback-return */
import { useTranslation } from 'react-i18next'
import styles from './EditableArticleCard.module.scss'
import { memo, useEffect, useRef, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useGetArticleById } from '../../api/articleApi'
import { Article } from '@/entities/Article'
import { VStack } from '@/shared/ui/redesigned/Stack'
import {
	EditableArticleCardBlockInfo,
	EditableArticleCardButtonsBlock,
	EditableArticleCardMainInfo
} from '../EditableArticleFields'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'

interface EditableArticleCardProps {
	className?: string
	articleId: string
}

const initialValue = {
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
}

export const EditableArticleCard = memo((props: EditableArticleCardProps) => {
	const { className, articleId } = props
	const { t } = useTranslation()
	const { data, isLoading } = useGetArticleById(articleId)
	const oldValue = useRef<Article | null>(null)
	const [articleData, setArticleData] = useState<Article>(initialValue as Article)
	const authData = useSelector(getUserAuthData)
	const { id } = useParams<{ id: string }>()
	const isPossibility = id === authData?.id

	useEffect(() => {
		if (!isLoading && data) {
			oldValue.current = data
			setArticleData(data)
		}
	}, [data, isLoading])

	return (
		<div className={classNames(styles.EditableArticleCard, {}, [className])}>
			{
				isPossibility
					? <>
						<VStack gap='24'>
							<EditableArticleCardMainInfo
								articleData={articleData}
								setArticleData={setArticleData}
							/>
							<EditableArticleCardBlockInfo
								articleData={articleData}
								setArticleData={setArticleData}
							/>
							<EditableArticleCardButtonsBlock
								articleData={articleData}
								setArticleData={setArticleData}
								oldValue={oldValue}
							/>
						</VStack></>
					: 'Доступ запрещен'
			}
		</div >
	)
})