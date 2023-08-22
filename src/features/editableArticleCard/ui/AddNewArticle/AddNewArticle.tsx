import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useState } from 'react'
import styles from './AddNewArticle.module.scss'
import { Article } from '@/entities/Article'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { EditableArticleCardBlockInfo, EditableArticleCardButtonsBlock, EditableArticleCardMainInfo } from '../EditableArticleFields'

interface AddNewArticleProps {
	className?: string
}

const initialValue = {
	id: String(new Date()),
	title: '',
	subtitle: '',
	img: '',
	blocks: [],
	createdAt: '15.07.2022',
	type: [],
	user: {
		id: '1',
		username: 'admin'
	},
	views: 0
}

export const AddNewArticle = memo((props: AddNewArticleProps): JSX.Element => {
	const data = initialValue
	const [articleData, setArticleData] = useState<Article>(data as Article)

	return (
		<div className={classNames(styles.EditableArticleCard, {}, [''])}>
			<VStack gap='24'>
				<EditableArticleCardMainInfo articleData={articleData} setArticleData={setArticleData} />
				<EditableArticleCardBlockInfo articleData={articleData} setArticleData={setArticleData} />
				<EditableArticleCardButtonsBlock articleData={articleData} setArticleData={setArticleData} isNew />
			</VStack>
		</div>
	)
})
