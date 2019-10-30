import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MainHeader from '../Header';
import MainFooter from '../MainFooter';

const Root = styled(Container)({
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
});

const MainLayout = props => (
  <Root maxWidth="xl">
    <MainHeader />
    {props.children}
    <MainFooter />
  </Root>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
