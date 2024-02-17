import { useState } from 'react'

import { Arrow, Comment, Eye, Like } from '@/assets/icons'

import s from './post.module.scss'

type Props = {
  image: string
  imageUser?: string
  name: string
  url?: string
}

export const Post = (props: Props) => {
  const { image, name, url } = props
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleClick = () => {
    setIsActive(prev => !prev)
  }

  return (
    <div className={s.contentPost}>
      <div className={s.contentPost__top}>
        <div className={s.contentPost__block}>
          <div className={s.contentPost__logo}>
            <img alt={'image-post-logo-users'} className={s.contentPost__foto} src={image} />
          </div>
          <div className={s.contentPost__info}>
            <div className={s.contentPost__userName}>{name}</div>
            <a href={'https://www.pexels.com'}>Photos provided by Pexels</a>
          </div>
        </div>
        <div className={s.contentPost__icon}>...</div>
      </div>
      <a className={s.contentPost__picture} href={url} rel={'noreferrer'} target={'_blank'}>
        <img alt={'image-post'} className={s.contentPost__image} src={image} />
      </a>
      <div className={s.contentPost__bottom}>
        <div className={s.contentPost__sprite} onClick={handleClick}>
          <div className={s.iconItem}>
            <Like className={isActive ? `${s.active} icon` : 'icon'} />
            26
          </div>
          <div className={s.iconItem}>
            <Comment className={'icon'} />
          </div>
          <div className={s.iconItem}>
            <Arrow className={'icon'} />
          </div>
        </div>
        <div className={s.contentPost__visit}>
          <Eye className={'icon'} />
          765
        </div>
      </div>
    </div>
  )
}
