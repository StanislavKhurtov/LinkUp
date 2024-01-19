import { Card, Typography } from '@/components/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/UI/card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Typography variant={'large'}>I am card</Typography>,
  },
}
