import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, Linear } from '@/components/ui'
import { useGetImageQuery } from '@/pages/news/api/news-api'
import { Post } from '@/shared/ui/post/post'

import s from './news.module.scss'

export const News = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, isError, isLoading } = useGetImageQuery({ page: currentPage })
  const { t } = useTranslation()
  const handleNextPage = () => {
    setCurrentPage(prev => ++prev)
  }
  const handlePrevPage = () => {
    setCurrentPage(prev => ++prev)
  }

  if (isLoading) {
    return <Linear />
  }
  if (isError) {
    return <Linear />
  }

  return (
    <div className={s.news}>
      <div className={s.news__post}>
        {data?.photos?.map(photo => {
          return (
            <Post
              image={photo.src.original}
              key={photo.id}
              name={photo.photographer}
              url={photo.url}
            />
          )
        })}
      </div>
      <div className={s.news__btns}>
        <Button onClick={handlePrevPage} variant={'primary'}>
          {t('Prev')}
        </Button>
        <Button onClick={handleNextPage} variant={'primary'}>
          {t('Next')}
        </Button>
      </div>
    </div>
  )
}
