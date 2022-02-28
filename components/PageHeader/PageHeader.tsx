import React, { FC, ReactElement } from 'react'
import styles from './PageHeader.module.css'
import PropTypes from 'prop-types'

export const PageHeader: FC = ({ children }): ReactElement => (
   <h1 className={styles.pageHeader}>{children}</h1>
)

PageHeader.propTypes = {
  children: PropTypes.string,
}
