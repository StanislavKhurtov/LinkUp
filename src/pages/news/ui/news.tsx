import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { useGetImageQuery } from '@/pages/news/api/news-api'

import s from './news.module.scss'

export const News = () => {
  const { data } = useGetImageQuery({ per_page: 50 })

  console.log(data)

  return (
    <div className={s.items}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter={'10px'}>
          {data?.photos?.map((photo: any) => {
            return (
              <div key={photo.id}>
                <img alt={photo.alt} className={s.image} src={photo.src.original} />
              </div>
            )
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}
