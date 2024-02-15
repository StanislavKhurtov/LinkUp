import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Linear } from '@/components/ui'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field'
import { useLoginMutation } from '@/pages/auth/api'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { Button } from '../../ui/button'

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(3),
  rememberMe: z.boolean().default(false).optional(),
})

type FormValues = z.infer<typeof loginSchema>

export const SignIn = () => {
  const [logIn, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })
  const { t } = useTranslation()

  if (isLoading) {
    return <Linear />
  }
  const onSubmit = async (data: FormValues) => {
    logIn({
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe!,
    })

    try {
      await logIn({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe!,
      })
      navigate('/')
    } catch (e: any) {
      console.log(e)
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.form__presentation}>
        <div className={s.form__title}>{t('Presentation')}</div>
        <div className={s.form__subTitle}>{t('SubTitle')}</div>
      </div>
      <DevTool control={control} />
      <ControlledTextField
        control={control}
        errorMessage={errors.email?.message}
        label={t('Email')}
        name={'email'}
      />
      <ControlledTextField
        control={control}
        errorMessage={errors.password?.message}
        label={t('Password')}
        name={'password'}
      />
      <ControlledCheckbox control={control} label={t('Save user')} name={'rememberMe'} />
      <Button type={'submit'} variant={'secondary'}>
        {t('Sign in')}
      </Button>
    </form>
  )
}
