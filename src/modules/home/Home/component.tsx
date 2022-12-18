import React from 'react';
import { Button, Text } from '~/components/core';

import useTheme from '~/theme/useTheme';
import { Link } from '~/components/route';
import './styles.module.scss';

function HomeComponent() {
  const theme = useTheme();
  // const themedStyles = styles(theme);
  return (
    <div>
      <Text>Click below button to navigate to other screen</Text>
      <Link href='/profile'>
        <Button color={'primary'}>Go to Profile</Button>
      </Link>
      <Link href='/settings'>
        <Button color={'success'}>Go to Settings</Button>
      </Link>
      <Link href='/notifications'>
        <Button color={'secondary'}>Go to Notification</Button>
      </Link>
    </div>
  );
}

export default HomeComponent;
