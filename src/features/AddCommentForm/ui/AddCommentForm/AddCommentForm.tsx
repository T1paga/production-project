import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'

import styles from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from '@/shared/ui/deprecated/Input'
import { Button } from '@/shared/ui/deprecated/Button'
import { useSelector } from 'react-redux'
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from '@/shared/ui/redesigned/Stack'

export interface AddCommentFormProps {
	className?: string
	onSendComment: (text: string) => void
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps): JSX.Element => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()

	const text = useSelector(getAddCommentFormText)
	const error = useSelector(getAddCommentFormError)

	const onCommentTextChange = useCallback((value: string) => {
		dispatch(addCommentFormActions.setText(value))
	}, [dispatch])

	const onSendHandler = useCallback(() => {
		onSendComment(text || '')
		onCommentTextChange('')
	}, [onCommentTextChange, onSendComment, text])

	return (
		<DynamicModuleLoader reducers={reducers}>
			<HStack data-testid={'AddCommentForm'} justify='between' max className={classNames(styles.AddCommentForm, {}, [className ?? ''])}>
				<Input
					data-testid={'AddCommentForm.Input'}
					className={styles.input}
					onChange={onCommentTextChange}
					placeholder='Введите текст сообщения'
					value={text}
				/>
				<Button data-testid={'AddCommentForm.Button'} onClick={onSendHandler}>Отправить</Button>
			</HStack>
		</DynamicModuleLoader>
	)
}
)

export default AddCommentForm