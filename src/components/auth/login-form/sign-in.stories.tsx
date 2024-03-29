import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from '@/components/auth/login-form/sign-in'

const meta = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Auth/LoginForm',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
