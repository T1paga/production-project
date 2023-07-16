import { type StateSchema } from "app/providers/StoreProvider"
import { getProfileIsLoading } from "./getProfileIsLoading"

describe('getProfileIsLoading', () => {
	test('should work with filed state', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: true
			}
		}

		expect(getProfileIsLoading(state as StateSchema)).toBe(true)
	})

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}

		expect(getProfileIsLoading(state as StateSchema)).toBe(undefined)
	})
})