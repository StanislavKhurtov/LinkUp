import { Button } from '@/components/ui'

export const News = () => {
  return (
    <div>
      <Button as={'a'} href={'http://yandex.ru'} rel={'noopener noreferrer'} target={'_blank'}>
        Link
      </Button>
    </div>
  )
}
