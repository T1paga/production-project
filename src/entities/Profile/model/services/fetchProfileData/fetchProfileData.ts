import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import type { Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/fetchProfileData',
	async (_: void, thunkApi) => {
		const { extra, rejectWithValue } = thunkApi

		try {
			const response = await extra.api.get<Profile>('/profile')

			if (!response.data) {
				throw new Error()
			}

			console.log(response.data)
			return response.data
		} catch (e) {
			console.log(e)
			return rejectWithValue('error')
		}
	}
)
