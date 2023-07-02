module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"plugin:react/recommended",
		"standard-with-typescript",
		"plugin:i18next/recommended",
	],
	settings: {
		react: {
			version: "detect"
		}
	},
	overrides: [
		{
			files: ["**/src/**/*.test.{ts,tsx}"],
			rules: {
				"i18next/no-literal-string": "off"
			}
		}
	],
	parserOptions: {
		sourceType: "module",
		project: "./tsconfig.json"
	},
	plugins: ["react", "i18next"],
	rules: {
		'@typescript-eslint/indent': 'off',
		'react/jsx-indent': [2, "tab"],
		'react/jsx-indent-props': [2, "tab"],
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'react/display-name': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/space-before-function-paren': [0, 'always'],
		'eol-last': 0,
		indent: [2, "tab"],
		"no-tabs": 0,
		'@typescript-eslint/quotes': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'no-unused-vars': ['error', { 'varsIgnorePattern': '^[A-Z_]+$' }],
		'i18next/no-literal-string': [
			'warn',
			{
				markupOnly: true,
				ignoreAttribute: ['data-testid', 'to']
			}
		]
	},
	globals: {
		__IS_DEV__: true
	}
};
