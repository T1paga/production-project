import { Article, ArticleBlockType } from '@/entities/Article'
import styles from './EditableArticleCardBlockInfo.module.scss'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Textarea } from '@/shared/ui/redesigned/Textarea'
import { ChangeEvent, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { EditBlock } from '../EditBlock/EditBlock'
import { DeleteParagraph } from '../DeleteParagraph/DeleteParagraph'

interface EditableArticleCardBlockInfoProps {
	className?: string
	articleData: Article
	setArticleData: (article: Article) => void
}

export const EditableArticleCardBlockInfo = memo((props: EditableArticleCardBlockInfoProps): JSX.Element => {
	const { className, articleData, setArticleData } = props
	const { t } = useTranslation()

	const onChangeParagraph = useCallback((e: ChangeEvent<HTMLTextAreaElement>, blockId: string, number: number) => {
		e.preventDefault()

		const updatedBlocks = articleData.blocks.map((block) => {
			if (block.type === ArticleBlockType.TEXT && block.id === blockId) {
				const newParagraphs = block.paragraphs.map((paragraph, index) => {
					if (number === index) {
						return e.target.value
					}
					return paragraph
				})

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
	}, [articleData, setArticleData])

	const onChangeCodeBlock = useCallback((e: ChangeEvent<HTMLTextAreaElement>, blockId: string) => {
		e.preventDefault()

		const updatedBlocks = articleData.blocks.map((block) => {
			if (block.type === ArticleBlockType.CODE && block.id === blockId) {
				return {
					...block,
					code: e.target.value
				}
			}

			return block
		})

		console.log(updatedBlocks)

		setArticleData({
			...articleData,
			blocks: updatedBlocks
		})
	}, [articleData, setArticleData])

	const onChangeImgBlock = useCallback((e: ChangeEvent<HTMLTextAreaElement>, blockId: string) => {
		e.preventDefault()

		const updatedBlocks = articleData.blocks.map((block) => {
			if (block.type === ArticleBlockType.IMAGE && block.id === blockId) {
				return {
					...block,
					src: e.target.value
				}
			}
			return block
		})

		console.log(updatedBlocks)

		setArticleData({
			...articleData,
			blocks: updatedBlocks
		})
	}, [articleData, setArticleData])

	const onChangeTitleBlock = useCallback((e: ChangeEvent<HTMLTextAreaElement>, blockId: string) => {
		e.preventDefault()

		const updatedBlocks = articleData.blocks.map((block) => {
			if (block.id === blockId) {
				return {
					...block,
					title: e.target.value
				}
			}
			return block
		})

		console.log(updatedBlocks)

		setArticleData({
			...articleData,
			blocks: updatedBlocks
		})
	}, [articleData, setArticleData])

	const renderBlocks = () => (
		articleData.blocks?.map((block) => {
			if (block.type === ArticleBlockType.TEXT) {
				return (
					<VStack gap='8' key={block.id} className={styles.textAreaField}>
						<Text text='###TEXT' />
						<Textarea
							className={styles.titleBlock}
							value={block.title || ''}
							onChange={(e) => onChangeTitleBlock(e, block.id)}
						/>

						{
							block.paragraphs.map((paragraph, index) => (
								<div key={block.id + `${index}`} className={styles.paragraphWrapper}>
									<Textarea
										className={styles.textBlock}
										value={paragraph}
										onChange={(e) => onChangeParagraph(e, block.id, index)} />
									<DeleteParagraph
										articleData={articleData}
										setArticleData={setArticleData}
										index={index}
										blockId={block.id}
									/>
								</div>
							)
							)
						}
						<EditBlock
							blockId={block.id}
							blockType={block.type}
							articleData={articleData}
							setArticleData={setArticleData}
						/>
					</VStack >
				)
			} else if (block.type === ArticleBlockType.CODE) {
				return (
					<VStack gap='8' key={block.id} className={styles.textAreaField}>
						<Text text='###CODE' />
						<Textarea
							className={styles.codeBlock}
							value={block.code}
							onChange={(e) => onChangeCodeBlock(e, block.id)} />
						<EditBlock
							blockId={block.id}
							blockType={block.type}
							articleData={articleData}
							setArticleData={setArticleData}
						/>
					</VStack>
				)
			} else {
				return (
					<VStack gap='8' key={block.id} className={styles.textAreaField}>
						<Text text='###IMG' />
						<Textarea
							className={styles.titleBlock}
							value={block.title || ''}
							onChange={(e) => onChangeTitleBlock(e, block.id)}
						/>

						<Textarea
							className={styles.imgBlock}
							value={block.src}
							onChange={(e) => onChangeImgBlock(e, block.id)} />
						<EditBlock
							blockId={block.id}
							blockType={block.type}
							articleData={articleData}
							setArticleData={setArticleData}
						/>
					</VStack>
				)
			}
		})
	)

	return (
		<>
			{renderBlocks()}
		</>
	)
}
)
