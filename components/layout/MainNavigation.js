import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Silent Meditations</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meditations</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meditation</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
