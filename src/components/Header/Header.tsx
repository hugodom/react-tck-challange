import React, { FunctionComponent } from 'react';
import './Header.scss';

export const Header: FunctionComponent<{}> = () => {
  const test = 'test';
  return (
    <header>
      <nav>
        <ul className="nav">
          <li className="nav__item">
            <a href="/tab1">Tab 1</a>
          </li>
          <li className="nav__item">
            <a href="/tab2">Tab 2</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
