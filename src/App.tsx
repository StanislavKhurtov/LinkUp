import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <div>Hello</div>
      <Button as={'a'} href={'http://yandex.ru'} rel={'noopener noreferrer'} target={'_blank'}>
        Link
      </Button>
    </div>
  )
}
