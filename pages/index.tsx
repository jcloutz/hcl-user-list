import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { fetchXmlUsers, fetchJsonUsers } from '../lib/api';
import { sortByValue } from '../lib/sortByValue';
import { Person } from '../interfaces/person.interface';
import { PageHeader } from '../components/PageHeader/PageHeader'
import { Table } from '../components/Table/Table';

const Home: NextPage = () => {
  const [users, setUsers] = useState<Person[]>([])

  const fetchAllUsers = useCallback(async () => {
    const results = await Promise.all([
      fetchXmlUsers(),
      fetchJsonUsers(),
    ])

    const apiUsers = results.flatMap(x => x.person)
    apiUsers.sort(sortByValue(u => u.id))

    setUsers(apiUsers);
  }, [setUsers])

  useEffect(() => {
    fetchAllUsers();
  }, [])

  return (
    <main className={styles.container}>
      <Head>
        <title>User List Application</title>
        <meta name="description" content="Sorted user list" />
      </Head>

      <PageHeader>User List</PageHeader>
      <Table
        data={users}
        rowId={x => x.id}
        columns={[
          {name: 'ID', accessor: x => x.id, skeletonSize: 30},
          {name: 'First Name', accessor: x => x.firstName, skeletonSize: 100},
          {name: 'Last Name', accessor: x => x.lastName, skeletonSize: 100},
        ]} />
    </main>
  )
}

export default Home
