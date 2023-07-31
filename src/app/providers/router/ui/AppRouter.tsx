import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from '@/widgets/PageLoader'
import { routeConfig } from '@/app/providers/router'
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth'
import { type appRoutesProps } from '@/shared/types/router'

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: appRoutesProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>
				{route.element}
			</Suspense>
		)
		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
			/>
		)
	}, [])

	return (
		<Routes>
			{Object.values(routeConfig).map(renderWithWrapper)}
		</Routes>
	)
}

export default memo(AppRouter)
