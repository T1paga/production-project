import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { AboutPageAsync } from "./pages/aboutPage/AboutPage.async"
import { Suspense, useContext, useState } from "react"
import { MainPageAsync } from "./pages/mainPage/MainPage.async"
import './styles//index.scss'
import { Theme, ThemeContext } from "./theme/ThemeContext"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/ClassNames/ClassNames"



const app = () => {

	const {theme, toggleTheme} = useTheme()

  return (
	 <div className={classNames('app', {}, [theme])}>
		<button onClick={toggleTheme}>Switch</button>
		<Link to={'/main'}>Главная</Link>
		<Link to={'/about'}>О сайте</Link>
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path={'/about'} element={<AboutPageAsync/>} />
				<Route path={'/main'} element={<MainPageAsync/>} />
			</Routes>
      </Suspense>
	 </div>
  )
}

export default app