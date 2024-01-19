import { Player } from '@/components/ui/audioPlayer/Player'
import { Button } from '@/components/ui/button'
export function App() {
  return (
    <div>
      <Player srcList={[]} />
      <div>Hello</div>
      <Button as={'a'} href={'http://yandex.ru'} rel={'noopener noreferrer'} target={'_blank'}>
        Link
      </Button>
    </div>
  )
}
