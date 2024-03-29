module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"standard-with-typescript",
		"plugin:react/recommended",
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
	plugins: [
		"ulbi-tv-plugin",
		"react",
		"i18next",
		"react-hooks",
		"unused-imports"
	],
	rules: {
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "error", // Checks effect dependencies
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
		"unused-imports/no-unused-imports": "error",
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/space-before-function-paren': [0, 'always'],
		'@typescript-eslint/no-misused-promises': 'off',
		'eol-last': 0,
		indent: [2, "tab"],
		"no-tabs": 0,
		'@typescript-eslint/consistent-type-imports': 'off',
		'@typescript-eslint/': 'off',
		'@typescript-eslint/quotes': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'no-unused-vars': ['warn', { 'varsIgnorePattern': '^[A-Z_]+$' }],
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/prefer-ts-expect-error': 'off',
		'@typescript-eslint/await-thenable': 'off',
		"@typescript-eslint/restrict-plus-operands": 'off',
		'@typescript-eslint/no-invalid-void-type': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'i18next/no-literal-string': [
			'error',
			{
				markupOnly: true,
				ignoreAttribute: [
					'data-testid',
					'to',
					'feature',
					'size',
					'justify',
					'border',
					'variant',
					'align',
					'wrap',
					'color',
					'direction',
					'target',
					'as',
					'role'
				]
			}
		],
		'ulbi-tv-plugin/path-checker': ['error', { alias: '@' }],
		'ulbi-tv-plugin/layer-imports': [
			'error',
			{
				alias: '@',
				ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
			},
		],
		'ulbi-tv-plugin/public-api-imports': [
			'error',
			{
				alias: '@',
				testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
			},
		],
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	}
};