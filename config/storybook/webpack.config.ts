import path from "path"
import { type BuildPaths } from "../build/types/config"
import type webpack from "webpack"
import { buildCssLoader } from "../build/loaders/buildCssLoader"

export default ({ config }: { config: webpack.Configuration }): any => {
	const paths: BuildPaths = {
		build: '',
		entry: '',
		html: '',
		src: path.resolve(__dirname, '..', '..', 'src')
	}

	config.resolve?.modules?.push(paths.src)
	config.resolve?.extensions?.push('.ts', '.tsx')

	config.module?.rules?.push(buildCssLoader(true))

	if (config?.module?.rules) {
		config.module.rules = config.module.rules.map((rule: any) => {
			if (String(rule.test).includes('svg')) {
				return { ...rule, exclude: /\.svg$/i }
			}
			return rule
		})
	}

	config.module?.rules?.push({
		test: /\.svg$/,
		use: ['@svgr/webpack']
	})

	return config
}