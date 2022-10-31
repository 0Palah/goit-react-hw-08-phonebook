import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import css from './AppBar.module.css';
import { AppBar, Box, SvgIcon, Toolbar, Typography } from '@mui/material';
import { Contacts } from '@mui/icons-material';

export default function AppBarComp() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar>
      {/* <SvgIcon>
        <Contacts />
      </SvgIcon> */}
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Navigation />
        </Box>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
    // <header className={css.header}>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </header>
  );
}
