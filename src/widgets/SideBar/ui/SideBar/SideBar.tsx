import { classNames } from 'shared/lib/classNames';

import styles from './SideBar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prevstate) => !prevstate);
  };

  return (
    <div className={classNames(styles.SideBar, { [styles.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>Toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        {/* langWwitcher */}
      </div>
    </div>
  );
};
