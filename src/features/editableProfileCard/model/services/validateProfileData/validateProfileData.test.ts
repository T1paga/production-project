/* eslint-disable @typescript-eslint/no-floating-promises */
import { validateProfileData } from './validateProfileData'
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { ValidateProfileError } from '../../types/editableProfileCardSchema'

const data = {
	username: 'admin',
	age: 22,
	country: Country.Belarus,
	lastname: 'familia',
	first: 'imya',
	city: 'asf',
	currency: Currency.USD
}

describe('validateProfileData', () => {
	test('sucess', async () => {
		const result = validateProfileData(data)

		expect(result).toEqual([])
	})

	test('without firstname and lastname', async () => {
		const result = validateProfileData({ ...data, first: '', lastname: '' })

		expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
	})

	test('incorrect age', async () => {
		const result = validateProfileData({ ...data, age: undefined })

		expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
	})

	test('icorrect country', async () => {
		const result = validateProfileData({ ...data, country: undefined })

		expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
	})

	test('incorrect all', async () => {
		const result = validateProfileData({})

		expect(result).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY
		])
	})
})