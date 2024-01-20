import { Button, Page, TextField, Typography } from '@/components/ui'
import { Table, TableBody, TableHead, TableHeadCell, TableRow } from "@/components/ui/table";

import s from './decks.module.scss'

export const Decks1 = () => {
  return (
    <Page>
      <div className={s.decks}>
        <div className={s.decks__top}>
          <Typography as={'h1'} variant={'large'}>
            Decks
          </Typography>
          <Button>Add new Decks</Button>
        </div>
        <div className={s.decks__filtered}>
          <TextField type={'search'} />
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
          <TableBody></TableBody>
        </Table>
      </div>
    </Page>
  )
}
