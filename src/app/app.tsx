import { Route, Routes, Link } from "react-router-dom"
import { Suspense } from "react"
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "../shared/lib/classNames"
import { AboutPage } from "../pages/aboutPage"
import { MainPage } from "../pages/mainPage"
import './styles/index.scss'

const app = () => {

	const {theme, toggleTheme} = useTheme()

  return (
	 <div className={classNames('app', {}, [theme])}>
		<button onClick={toggleTheme}>Switch</button>
		<Link to={'/main'}>Главная</Link>
		<Link to={'/about'}>О сайте</Link>
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path={'/about'} element={<AboutPage/>} />
				<Route path={'/main'} element={<MainPage/>} />
			</Routes>
      </Suspense>
	 </div>
  )
}

export default app