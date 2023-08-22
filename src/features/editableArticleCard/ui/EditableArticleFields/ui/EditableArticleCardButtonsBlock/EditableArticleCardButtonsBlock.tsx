import { MutableRefObject, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Button } from '@/shared/ui/redesigned/Button'
import { useNavigate } from 'react-router-dom'
import { Article, ArticleBlockType, ArticleBlock, ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock } from '@/entities/Article'
import { getRouteArticles } from '@/shared/const/router'
import { useCreateArticle, useUpdateArticle } from '../../../../api/articleApi'

interface EditableArticleCardButtonsBlockProps {
	className?: string
	articleData: Article
	setArticleData: (article: Article) => void
	oldValue?: MutableRefObject<Article | null>
	isNew?: boolean
}

export const EditableArticleCardButtonsBlock = memo((props: EditableArticleCardButtonsBlockProps): JSX.Element => {
	const { articleData, setArticleData, oldValue, isNew } = props
	const { t } = useTranslation()
	const navigate = useNavigate()
	const [updateArticleMutation] = useUpdateArticle()
	const [createArticleMutation] = useCreateArticle()

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

	const handleAddNewArticle = useCallback(
		() => {
			try {
				createArticleMutation({
					...articleData,
					userId: '1',
					user: undefined
				})

				navigate(getRouteArticles())
				window.location.reload()
			} catch (e) {
				console.log(e)
			}
		},
		[createArticleMutation, articleData, navigate]
	)

	const handleCancelUpdataArticle = () => {
		if (oldValue) {
			if (oldValue.current !== null) setArticleData(oldValue.current)
		}
	}

	const handleAddNewBlock = (blockType: ArticleBlockType) => () => {
		const updateBlocks: ArticleBlock[] = [...articleData.blocks]

		if (blockType === ArticleBlockType.TEXT) {
			const newBlock: ArticleTextBlock = {
				id: String(new Date()),
				type: ArticleBlockType.TEXT,
				title: "",
				paragraphs: [""]
			}

			updateBlocks.push(newBlock)
		}

		if (blockType === ArticleBlockType.CODE) {
			const newBlock: ArticleCodeBlock = {
				id: String(new Date()),
				type: ArticleBlockType.CODE,
				code: ''
			}

			updateBlocks.push(newBlock)
		}

		if (blockType === ArticleBlockType.IMAGE) {
			const newBlock: ArticleImageBlock = {
				id: String(new Date()),
				type: ArticleBlockType.IMAGE,
				src: '',
				title: ''
			}

			updateBlocks.push(newBlock)
		}

		setArticleData({
			...articleData,
			blocks: updateBlocks
		})
	}

	return (
		<>
			<HStack justify='center' max gap='32'>
				<HStack gap='8'>
					<Button onClick={handleAddNewBlock(ArticleBlockType.TEXT)} color='normal'>
						{t('+ Текст')}
					</Button>
					<Button onClick={handleAddNewBlock(ArticleBlockType.CODE)} color='normal'>
						{t('+ Code')}
					</Button>
					<Button onClick={handleAddNewBlock(ArticleBlockType.IMAGE)} color='normal'>
						{t('+ Img')}
					</Button>
				</HStack>
				{isNew
					? <Button onClick={handleAddNewArticle} color='success'>
						{t('Сохранить статью')}
					</Button>
					: <Button onClick={handleUpdateArticle} color='success'>
						{t('Изменить статью')}
					</Button>
				}
				<Button onClick={handleCancelUpdataArticle} color='error'>
					{t('Отменить изменения')}
				</Button>
			</HStack>
		</>
	)
}
)
