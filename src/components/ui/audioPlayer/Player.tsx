import { ChangeEvent, ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui'

type PlayerProps = {
  srcList: string[]
}

export const Player = forwardRef(
  ({ srcList }: PlayerProps, ref: ForwardedRef<HTMLAudioElement>) => {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlayPause = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause()
        } else {
          audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
      }
    }

    const next = () => {
      const nextIndex = (currentTrackIndex + 1) % srcList.length

      setCurrentTrackIndex(nextIndex)
    }

    const prev = () => {
      const previousIndex = (currentTrackIndex - 1 + srcList.length) % srcList.length

      setCurrentTrackIndex(previousIndex)
    }

    const stop = () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      setIsPlaying(false)
    }

    const setVolume = (volume: number) => {
      if (audioRef.current) {
        audioRef.current.volume = volume
      }
    }

    const handleTogglePlayPause = () => {
      togglePlayPause()
      setIsPlaying(!isPlaying)
    }

    const handleNext = () => {
      next()
    }

    const handlePrevious = () => {
      prev()
    }

    const handleStop = () => {
      stop()
    }

    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
      const volume = parseFloat(event.target.value)

      setVolume(volume)
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const fileList = event.target.files

      if (fileList && fileList.length > 0) {
        const file = fileList[0]
        const fileUrl = URL.createObjectURL(file)

        setCurrentTrackIndex(0)
        setIsPlaying(false)
        srcList.splice(0, srcList.length, fileUrl)
      }
    }

    useEffect(() => {
      setCurrentTrackIndex(0)
    }, [])

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.src = srcList[currentTrackIndex]
        if (isPlaying) {
          audioRef.current.play()
        }
      }
    }, [currentTrackIndex, isPlaying, srcList])

    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(audioRef.current)
        } else {
          ref.current = audioRef.current
        }
      }
    }, [audioRef, ref])

    return (
      <div>
        <audio ref={audioRef} />
        <Button onClick={handlePrevious} variant={'primary'}>
          Prev
        </Button>
        <Button onClick={handleTogglePlayPause} variant={'primary'}>
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button onClick={handleNext} variant={'primary'}>
          Next
        </Button>
        <Button onClick={handleStop} variant={'primary'}>
          Stop
        </Button>
        <input max={'1'} min={'0'} onChange={handleVolumeChange} step={'0.01'} type={'range'} />
        <input onChange={handleFileChange} type={'file'} />
      </div>
    )
  }
)
