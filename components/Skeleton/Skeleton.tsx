import React, { FC, ReactElement } from 'react'
import styles from './Skeleton.module.css';

export const Skeleton: FC<{width: number}> = ({ width }): ReactElement => (
  <div style={{ width: `${width}px`, height: '21.5px'}} className={styles.skeleton}></div>
)
