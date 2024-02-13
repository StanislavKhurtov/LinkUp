import { useTranslation } from 'react-i18next'

import { ToggleThemes } from '@/components/ui/theme/toggleThemes'

import s from './settings.module.scss'

export const Settings = () => {
  const { i18n, t } = useTranslation()
  const currentLanguage = i18n.language

  const handleClickEN = () => {
    i18n.changeLanguage('en')
  }
  const handleClickRU = () => {
    i18n.changeLanguage('ru')
  }

  return (
    <div className={s.settings}>
      <div className={s.settings__title}>{t('General')}</div>
      <div className={s.settings__items}>
        <div className={`${s.settings__item} ${s.theme}`}>
          <div className={s.settings__left}>
            <div className={s.language__text}>{t('Mode')}:</div>
          </div>
          <div className={s.settings__rigth}>
            <ToggleThemes />
          </div>
        </div>
        <div className={`${s.settings__item} ${s.language}`}>
          <div className={s.settings__left}>
            <div className={s.language__text}>{t('Language')}:</div>
          </div>
          <div className={s.settings__rigth}>
            <div className={s.language__btns}>
              <button className={currentLanguage === 'en' ? s.active : ''} onClick={handleClickEN}>
                English
              </button>
              <button className={currentLanguage === 'ru' ? s.active : ''} onClick={handleClickRU}>
                Русский
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
