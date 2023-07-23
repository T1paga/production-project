import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'

import styles from './ArticleViewSelector.module.scss'
import { ArticleView } from 'entities/Article/model/types/article'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'

interface ArticleViewSelectorProps {
	className?: string
	view: ArticleView
	onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
	{
		view: ArticleView.SMALL,
		icon: TiledIcon
	},
	{
		view: ArticleView.BIG,
		icon: ListIcon
	}
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps): JSX.Element => {
	const { className, view, onViewClick } = props

	const onClick = (newView: ArticleView) => () => {
		onViewClick?.(newView)
	}

	return (
		<div className={classNames(styles.ArticleViewSelector, {}, [className ?? ''])}>
			{viewTypes.map((viewType, id) => (
				<Button
					key={id}
					theme={ButtonTheme.CLEAR}
					onClick={onClick(viewType.view)}
				>
					<Icon
						Svg={viewType.icon}
						className={classNames('', { [styles.notSelected]: viewType.view !== view })}
					/>
				</Button>
			))}
		</div >
	)
}
)