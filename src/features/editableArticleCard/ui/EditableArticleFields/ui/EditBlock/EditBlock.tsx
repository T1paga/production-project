import { Article, ArticleBlockType } from '@/entities/Article'
// import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { memo } from 'react'

// import styles from './EditBlock.module.scss'
import { useTranslation } from 'react-i18next'

interface EditBlockProps {
	className?: string
	blockType: ArticleBlockType
	articleData: Article
	setArticleData: (article: Article) => void
	blockId: string
}

export const EditBlock = memo((props: EditBlockProps): JSX.Element => {
	const { className, blockType, articleData, setArticleData, blockId } = props
	const { t } = useTranslation()

	const handleAddNewParagraph = () => {
		const updatedBlocks = articleData.blocks.map((block) => {
			if (block.type === ArticleBlockType.TEXT && block.id === blockId) {
				const newBlock = {
					...block,
					paragraphs: [...block.paragraphs, '']
				}
				return newBlock
			}

			return block
		})

		setArticleData({
			...articleData,
			blocks: updatedBlocks
		})
	}

	const handleDeleteBlock = () => {
		const updatedBlocks = articleData.blocks.filter((block) => block.id !== blockId)

		setArticleData({
			...articleData,
			blocks: updatedBlocks
		})
	}

	if (blockType === ArticleBlockType.TEXT) {
		return (
			<HStack gap='16' justify='start'>
				<Button onClick={handleAddNewParagraph}>
					{t('Добавить параграф')}
				</Button>
				<Button onClick={handleDeleteBlock}>
					{t('Удалить блок')}
				</Button>
			</HStack>
		)
	}

	if (blockType === ArticleBlockType.CODE) {
		return (
			<HStack gap='16' justify='start'>
				<Button onClick={handleDeleteBlock}>{t('Удалить блок')}</Button>
			</HStack>
		)
	}

	if (blockType === ArticleBlockType.IMAGE) {
		return (
			<HStack gap='16' justify='start'>
				<Button onClick={handleDeleteBlock}>{t('Удалить блок')}</Button>
			</HStack>
		)
	}

	return <div></div>
})
