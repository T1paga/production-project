import { MutableRefObject, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Button } from '@/shared/ui/redesigned/Button'
import { useNavigate } from 'react-router-dom'
import { useUpdateArticle } from '../../api/articleApi'
import { Article, ArticleBlockType, ArticleBlock, ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock } from '@/entities/Article'
import { getRouteArticles } from '@/shared/const/router'

interface EditableArticleCardButtonsBlockProps {
	className?: string
	articleData: Article
	setArticleData: (article: Article) => void
	oldValue: MutableRefObject<Article | null>
}

export const EditableArticleCardButtonsBlock = memo((props: EditableArticleCardButtonsBlockProps): JSX.Element => {
	const { articleData, setArticleData, oldValue } = props
	const { t } = useTranslation()
	const navigate = useNavigate()
	const [updateArticleMutation] = useUpdateArticle()

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
		<HStack justify='center' max gap='32'>
			<HStack gap='8'>
				<Button onClick={handleAddNewBlock(ArticleBlockType.TEXT)} color='normal'>
					+ Текст
				</Button>
				<Button onClick={handleAddNewBlock(ArticleBlockType.CODE)} color='normal'>
					+ Code
				</Button>
				<Button onClick={handleAddNewBlock(ArticleBlockType.IMAGE)} color='normal'>
					+ Img
				</Button>
			</HStack>
			<Button onClick={handleUpdateArticle} color='success'>
				Изменить статью
			</Button>
			<Button onClick={handleCancelUpdataArticle} color='error'>
				Отменить изменения
			</Button>
		</HStack>
	)
}
)
