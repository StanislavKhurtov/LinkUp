import { Player } from '@/components/ui/audioPlayer/Player'

const radio = [
  'http://stream.nonstopplay.co.uk/nsp-128k-mp3',
  'https://ice-the.musicradio.com/CapitalXTRANationalMP3',
  'https://dorognoe.hostingradio.ru:8000/dorognoe',
  'http://listen.rpfm.ru:9000/premium128',
]

export const Music = () => {
  return (
    <div>
      <Player srcList={radio} />
    </div>
  )
}
