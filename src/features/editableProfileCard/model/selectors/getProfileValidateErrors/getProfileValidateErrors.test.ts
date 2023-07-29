import { type StateSchema } from "app/providers/StoreProvider"
import { getProfileValidateErrors } from "./getProfileValidateErrors"
import { ValidateProfileError } from "../../const/const"

describe('getProfileValidateErrors', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.NO_DATA]
			}
		}

		expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_AGE, ValidateProfileError.NO_DATA])
	})

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}

		expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
	})
})