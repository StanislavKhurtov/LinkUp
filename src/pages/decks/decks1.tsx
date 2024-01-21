import { useState } from 'react'

import { Button, Linear, Page, Pagination, TextField, Typography } from '@/components/ui'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/base-api'

import s from './decks.module.scss'

export const Decks1 = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const { data, error, isLoading } = useGetDecksQuery({
    currentPage: page,
    itemsPerPage: 10,
    name: search,
  })
  const [createDeck, { isLoading: isDeckBeingCreated }] = useCreateDeckMutation()

  if (isLoading) {
    return <Linear />
  }
  if (error) {
    console.log(error)

    return <div>Error</div>
  }

  return (
    <Page>
      <div className={s.decks}>
        <div className={s.decks__top}>
          <Typography as={'h1'} variant={'large'}>
            Decks
          </Typography>
          <Button onClick={() => createDeck({ name: '123456677' })}>Add new Decks</Button>
        </div>
        <div className={s.decks__filtered}>
          <TextField onValueChange={setSearch} type={'search'} value={search} />
          <Button>Add new Decks</Button>
          <Button>Add new Decks</Button>
          <input type={'range'} />
          <Button>Clear</Button>
        </div>
        <Table className={s.decks__table}>
          <TableHead>
            <TableRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Cards</TableHeadCell>
              <TableHeadCell>Last updated</TableHeadCell>
              <TableHeadCell>Created by</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.items.map(deck => {
              return (
                <TableRow key={deck.id}>
                  <TableCell>{deck.name}</TableCell>
                  <TableCell>{deck.cardsCount}</TableCell>
                  <TableCell>{new Date(deck.updated).toLocaleDateString()}</TableCell>
                  <TableCell>{deck.author.name}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <Pagination
          onChange={setPage}
          page={page}
          selectedCount={4}
          totalCount={data?.pagination?.totalPages!}
        />
      </div>
    </Page>
  )
}
