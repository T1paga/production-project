import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss';

const app = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Switch</button>
    </div>
  );
};

export default app;
