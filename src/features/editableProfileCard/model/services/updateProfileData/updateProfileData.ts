import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { type Profile } from '@/entities/Profile'
import { ValidateProfileError } from '../../const/const'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
	'profile/updateProfileData',
	async (_: void, thunkApi) => {
		const { extra, rejectWithValue, getState } = thunkApi

		const formData = getProfileForm(getState())

		const errors = validateProfileData(formData)

		if (errors.length) {
			return rejectWithValue(errors)
		}

		try {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData)

			if (!response.data) {
				throw new Error()
			}

			return response.data
		} catch (e) {
			console.log(e)
			return rejectWithValue([ValidateProfileError.SERVER_ERROR])
		}
	}
)
