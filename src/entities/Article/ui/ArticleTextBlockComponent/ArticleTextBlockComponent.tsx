import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ArticleTextBlockComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import type { ArticleTextBlock } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'

interface ArticleTextBlockComponentProps {
	className?: string
	block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps): JSX.Element => {
	const { className, block } = props

	const { t } = useTranslation()

	return (
		<div className={classNames(styles.ArticleTextBlockComponent, {}, [className ?? ''])}>
			{block.title && <Text title={block.title} className={styles.title} />}
			{block.paragraphs.map((paragraph) => (
				<Text
					key={paragraph}
					text={paragraph}
					className={styles.paragraph}
				/>
			))}
		</div>
	)
})
