import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './ArticleImageBlockComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import type { ArticleImageBlock } from '../../model/types/article'
import { Text, TextAlign } from '@/shared/ui/Text'

interface ArticleImageBlockComponentProps {
	className?: string
	block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps): JSX.Element => {
	const { t } = useTranslation()

	return (
		<div className={classNames(styles.ArticleImageBlockComponent, {}, [className ?? ''])}>
			<img src={block.src} alt={block.title} className={styles.img} />
			{block.title && <Text text={block.title} align={TextAlign.CENTER} />}
		</div>
	)
})
