/* eslint-disable @typescript-eslint/no-floating-promises */
import { updateProfileData } from "./updateProfileData"
import { TestAsyncThunk } from "@/shared/lib/tests/testAsyncThunk/testAsyncThunk"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import { ValidateProfileError } from "../../const/const"

const data = {
	username: 'admin',
	age: 22,
	country: Country.Belarus,
	lastname: 'familia',
	first: 'imya',
	city: 'asf',
	currency: Currency.USD,
	id: '1'
}

describe('updateProfileData', () => {
	test('sucess', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data
			}
		})

		thunk.api.put.mockReturnValue(Promise.resolve({
			data
		}))

		const result = await thunk.callThunk()

		expect(thunk.api.put).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(data)
	})

	test('error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data
			}
		})

		thunk.api.put.mockReturnValue(Promise.resolve({
			status: '403'
		}))

		const result = await thunk.callThunk()

		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
	})

	test('validate error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: { ...data, lastname: '' }
			}
		})

		const result = await thunk.callThunk()

		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
	})
})