import React, { FunctionComponent } from 'react';
import './Header.scss';

export const Header: FunctionComponent<{}> = () => {
  const test = 'test';
  return (
    <header>
      <nav>
        <ul className="nav">
          <li className="nav__item">Tab 1</li>
          <li className="nav__item">Tab 2</li>
        </ul>
      </nav>
    </header>
  );
};
