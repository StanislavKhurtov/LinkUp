import s from './profile.module.scss'

import bg from '../../assets/image/bg.jpg'

export const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.profile__block}>
        <div className={`${s.profile__top} ${s.top}`}>
          <div className={s.top__bg}>
            <img alt={'image-bg'} className={s.top__image} src={bg} />
          </div>
          <div className={s.top__body}>
            <div className={s.top__title}>Stanislav Khurtov</div>
            <div className={s.top__status}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolor dolorem omnis
              possimus rem? Aspernatur at consectetur corporis dolor nesciunt? Animi consequatur
              dolores eius illum nobis optio. Distinctio impedit, ratione!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
