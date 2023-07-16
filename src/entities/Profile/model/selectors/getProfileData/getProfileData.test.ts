import { type StateSchema } from "app/providers/StoreProvider"
import { getProfileData } from "./getProfileData"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"

describe('getProfileData', () => {
	test('should return error', () => {
		const data = {
			username: 'admin',
			age: 22,
			country: Country.Belarus,
			lastname: 'familia',
			first: 'imya',
			city: 'asf',
			currency: Currency.USD
		}

		const state: DeepPartial<StateSchema> = {
			profile: {
				data
			}
		}

		expect(getProfileData(state as StateSchema)).toEqual(data)
	})

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}

		expect(getProfileData(state as StateSchema)).toEqual(undefined)
	})
})