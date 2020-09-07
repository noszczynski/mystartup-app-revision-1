import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { BOTTOM_NAV_ITEMS } from '../../utils/constants';
import Element from './Footer.styles';
import { Title } from '../index';

const BottomNavigation: FC = () => {
  const theme = useContext(ThemeContext);

  const hoverEff = {
    y: -2,
    boxShadow: '0 5px 15px -8px rgba(0,0,0,.5)',
    transition: { duration: .2 }
  };

  return (
    <Element.Section>
      {BOTTOM_NAV_ITEMS.map((columns, columnIndex) => (
        <Element.Column key={columns[0].title}>
          {columns.map(({title, items}, navIndex) => (
            <Element.Nav whileHover={hoverEff} key={title}>
              <Title
                component="h6"
                color={
                  columnIndex === 0 && navIndex === 1
                    ? theme.color.red
                    : theme.color.gray500
                }
              >
                {title}
              </Title>
              <ul>
                {items.map(({label, to}) => (
                  <Element.NavItem
                    key={label}
                    whileHover={{ color: theme.color.blue }}
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
