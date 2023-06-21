import { Link } from "react-router-dom"
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "../shared/lib/classNames"
import './styles/index.scss'
import { AppRouter } from "./providers/router"

const app = () => {

	const {theme, toggleTheme} = useTheme()

  return (
	 <div className={classNames('app', {}, [theme])}>
		<button onClick={toggleTheme}>Switch</button>
		<Link to={'/'}>Главная</Link>
		<Link to={'/about'}>О сайте</Link>
		<AppRouter/>
	 </div>
  )
}

export default app