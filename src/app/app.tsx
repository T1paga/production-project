import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss';

const app = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default app;
