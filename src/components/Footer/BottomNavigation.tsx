import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { BOTTOM_NAV_ITEMS } from '../../utils/constants';
import Element from './Footer.styles';
import { Title } from '../index';

const hoverEff = {
  y: -2,
  backgroundColor: '#fff',
  boxShadow: '0 5px 15px -8px rgba(0,0,0,.5)',
};

const BottomNavigation: FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <Element.Section>
      {BOTTOM_NAV_ITEMS.map((columns) => (
        <Element.Column key={columns[0].title}>
          {columns.map(({title, items}) => (
            <Element.Nav whileHover={hoverEff} key={title}>
              <Title component="h6">{title}</Title>
              <ul>
                {items.map(({label, to}) => (
                  <Element.NavItem
                    key={label}
                    whileHover={{
                      color: theme.color.blue
                    }}
                  >
                    <Link to={to}>{label}</Link>
                  </Element.NavItem>
                ))}
              </ul>
            </Element.Nav>
          ))}
        </Element.Column>
      ))}
    </Element.Section>
  );
};

export default BottomNavigation;
