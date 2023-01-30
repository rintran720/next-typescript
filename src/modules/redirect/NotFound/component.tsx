import React from 'react';
import NotFoundImg from '~/images/404.webp';
import styles from './styles.module.scss';
import { Image } from '~/components/core';

function NotFoundComponent() {
  return (
    <div className='not-found-container'>
      <Image className='image' alt='404' src={NotFoundImg} />
    </div>
  );
}

export default NotFoundComponent;
