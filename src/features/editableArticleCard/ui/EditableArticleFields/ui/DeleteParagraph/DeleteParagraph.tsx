import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

import styles from './DeleteParagraph.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/redesigned/Button'
import { ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Article, ArticleBlockType } from '@/entities/Article'

interface DeleteParagraphProps {
	className?: string
	articleData: Article
	setArticleData: (article: Article) => void
	index: number
	blockId: string
}

export const DeleteParagraph = memo((props: DeleteParagraphProps): JSX.Element => {
	const { className, articleData, setArticleData, index, blockId } = props
	const { t } = useTranslation()

	const handleParagraphDelete = () => {
		const updatedBlocks = articleData.blocks.map((block) => {
			if (block.type === ArticleBlockType.TEXT && block.id === blockId) {
				const newParagraphs = block.paragraphs.filter((paragraph, paragraphIndex) => paragraphIndex !== index)
				return {
					...block,
					paragraphs: newParagraphs
				}
			}
			return block
		})

		setArticleData({
			...articleData,
			blocks: updatedBlocks
		})
	}

	return (
		<Button
			className={classNames(styles.DeleteParagraph, {}, [className ?? ''])}
			variant={ButtonTheme.CLEAR}
			onClick={handleParagraphDelete}
		>
			{t('X')}
		</Button>
	)
}
)
