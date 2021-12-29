import FeatherIcon from 'feather-icons-react';

import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.title}>Edwin Rheindt</a>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <a
              onMouseOver={() => {
                document.getElementById('1').classList.add(`${styles.hang}`);
              }}
              onMouseOut={() => {
                document.getElementById('1').classList.remove(`${styles.hang}`);
              }}
            >
              Projects{' '}
              <FeatherIcon
                id='1'
                icon='chevron-down'
                size='18'
                className={styles.icon}
              />
            </a>
          </li>
          <li>
            <a
              onMouseOver={() => {
                document.getElementById('2').classList.add(`${styles.hang}`);
              }}
              onMouseOut={() => {
                document.getElementById('2').classList.remove(`${styles.hang}`);
              }}
            >
              Socials
              <FeatherIcon
                id='2'
                icon='chevron-down'
                size='18'
                className={styles.icon}
              />
            </a>
          </li>
          <li>
            <a>Feedback</a>
          </li>
        </ul>
      </nav>
      <div>
        <a className={styles.link}>About</a>
        <a className={styles.link}>Contact me</a>
      </div>
    </header>
  );
}
