import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { Input } from '@/shared/ui/redesigned/Input'
import { Article } from '@/entities/Article'
import { СheckValidate } from '../../helpers/СheckValidate'

interface EditableArticleCardMainInfoProps {
	className?: string
	articleData: Article
	setArticleData: (article: Article) => void
}

export const EditableArticleCardMainInfo = memo((props: EditableArticleCardMainInfoProps): JSX.Element => {
	const { className, setArticleData, articleData } = props
	const { t } = useTranslation()

	const onChangeTitle = (value: string) => {
		setArticleData({
			...articleData,
			title: value
		})
	}

	const onChangeSubtitle = (value: string) => {
		setArticleData({
			...articleData,
			subtitle: value
		})
	}

	const onChangeImg = (value: string) => {
		setArticleData({
			...articleData,
			img: value
		})
	}

	return (
		<>
			<Input
				value={articleData?.title}
				label={t('Заголовок')}
				onChange={onChangeTitle}
			/>
			<СheckValidate
				field={articleData?.title}
			/>
			<Input
				value={articleData?.subtitle}
				label={t('Описание')}
				onChange={onChangeSubtitle}
			/>
			<СheckValidate
				field={articleData?.subtitle}
			/>
			<Input
				value={articleData?.img}
				label={t('Изображение')}
				onChange={onChangeImg}
			/>
			<СheckValidate
				field={articleData?.img}
			/>
		</>
	)
}
)
