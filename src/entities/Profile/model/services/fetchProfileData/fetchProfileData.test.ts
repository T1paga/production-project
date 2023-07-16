/* eslint-disable @typescript-eslint/no-floating-promises */
import { fetchProfileData } from "./fetchProfileData"
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"

const data = {
	username: 'admin',
	age: 22,
	country: Country.Belarus,
	lastname: 'familia',
	first: 'imya',
	city: 'asf',
	currency: Currency.USD
}

describe('fetchProfileData', () => {
	test('sucess', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData)

		thunk.api.get.mockReturnValue(Promise.resolve({
			data
		}))

		const result = await thunk.callThunk()

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(data)
	})

	test('error', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData)

		thunk.api.get.mockReturnValue(Promise.resolve({
			status: '403'
		}))

		const result = await thunk.callThunk()

		expect(result.meta.requestStatus).toBe('rejected')
	})
})