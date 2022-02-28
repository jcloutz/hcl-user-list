import React, { ReactElement} from 'react'
import styles from './Table.module.css'
import { Skeleton } from '../Skeleton/Skeleton';

interface TableColumn<DataType> {
  name: string;
  accessor: (rowValue: DataType) => any;
  skeletonSize: number;
}

interface TableProps<DataType> {
  data: DataType[];
  rowId: (rowData: DataType) => any;
  columns: TableColumn<DataType>[];
}

export const Table = <T extends object>({
  data,
  rowId,
  columns,
}: TableProps<T>): ReactElement => (
  <table className={styles.table}>
    <thead>
      <tr className={styles.table_headRow}>
        {columns.map(c => <th key={c.name} className={styles.table_cell}>{c.name}</th>)}
      </tr>
    </thead>
    <tbody>
      {data.length > 0 && data.map(row => (
        <tr key={rowId(row)} className={styles.table_row}>
          {columns.map(col => (
            <td key={col.name} className={styles.table_cell}>{col.accessor(row)}</td>
          ))}
        </tr>
      ))}
      {/* if there is no data show skeleton */}
      {data.length === 0 && [1, 2, 3].map(row =>(
        <tr key={row} className={styles.table_row}>
          {columns.map(col => (
            <td key={col.name} className={styles.table_cell}><Skeleton width={col.skeletonSize} /></td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)