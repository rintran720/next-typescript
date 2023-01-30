import NextLink from 'next/link';
import { styled } from '~/theme/core';

export const Link = styled(NextLink)(() => ({
  ['&']: {
    display: 'flex',
    textDecoration: 'none',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
