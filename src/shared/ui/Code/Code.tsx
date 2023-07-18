import { classNames } from 'shared/lib/classNames/classNames'
import { type ReactNode, memo, useCallback } from 'react'

import styles from './Code.module.scss'
import { Button, ButtonTheme } from '../Button/Button'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'

interface CodeProps {
	className?: string
	text: string
}

export const Code = memo((props: CodeProps): JSX.Element => {
	const { className, text } = props

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text)
	}, [text])

	return (
		<pre className={classNames(styles.Code, {}, [className ?? ''])}>
			<Button onClick={onCopy} className={styles.copyBtn} theme={ButtonTheme.CLEAR}>
				<CopyIcon className={styles.copyIcon} />
			</Button>
			<code>
				{text}
			</code>
		</pre>
	)
}
)
