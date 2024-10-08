import { PropsWithChildren } from 'react'
import { Button, Input } from '@telegram-apps/telegram-ui'

import styles from './Search.module.css'
import { useAppDispatch, useAppSelector } from '@app/store'
import { searchManager } from '@features/SearchManager'
import { useNavigate } from 'react-router-dom'

interface SearchPropsType {}

export const Search = ({}: PropsWithChildren<SearchPropsType>) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const managerId = useAppSelector((state) => state.common.primary.managerId)

  const searchAction = async () => {
    await dispatch(searchManager({ managerId: 288593 }))
    // await dispatch(searchManager({ managerId: '794535' }))
    navigate('/main')
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <Input
          header="Input"
          placeholder={'Enter your team ID'}
          value={managerId}
          onChange={() => {}}
        />
        <Button mode={'filled'} size={'l'} onClick={searchAction}>
          Search
        </Button>
      </div>
    </div>
  )
}
