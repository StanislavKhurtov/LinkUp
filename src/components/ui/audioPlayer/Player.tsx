import React, { ChangeEvent, forwardRef, useEffect, useRef, useState } from 'react'
import { DropzoneOptions, useDropzone } from 'react-dropzone'

import { Mute, Pause, Play, Prev, Stop } from '@/assets/icons'
import Next from '@/assets/icons/next'
import Open from '@/assets/icons/open'

import s from './Player.module.scss'

type PlayerProps = {
  srcList: string[]
}

export const Player = forwardRef(
  ({ srcList }: PlayerProps, ref: React.ForwardedRef<HTMLAudioElement>) => {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [addedTracks, setAddedTracks] = useState<string[]>([])
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [volume, setVolume] = useState(1)
    const [isMuted, setIsMuted] = useState(false)
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

    const updateVolume = (volume: number) => {
      if (audioRef.current) {
        audioRef.current.volume = volume
      }
      setVolume(volume)
    }

    const handleTogglePlayPause = () => {
      togglePlayPause()
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

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files

      if (files && files.length > 0) {
        const fileUrls: string[] = []

        for (let i = 0; i < files.length; i++) {
          const file = files[i]
          const fileUrl = URL.createObjectURL(file)

          fileUrls.push(fileUrl)
        }
        setCurrentTrackIndex(0)
        setIsPlaying(false)
        const fileNames = Array.from(files).map(file => file.name) // Извлечение названий треков

        setAddedTracks(fileNames)
        srcList.splice(0, srcList.length, ...fileUrls)
      }
    }

    const handleFolderDrop = (acceptedFiles: File[]) => {
      const folderFiles: string[] = []

      acceptedFiles.forEach(async file => {
        if (file.webkitRelativePath) {
          const fileUrl = URL.createObjectURL(file)

          folderFiles.push(fileUrl)
        }
      })

      setCurrentTrackIndex(0)
      setIsPlaying(false)
      const fileNames = acceptedFiles.map(file => file.name) // Извлечение названий треков

      setAddedTracks(fileNames)
      srcList.splice(0, srcList.length, ...folderFiles)
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

    useEffect(() => {
      const handleTimeUpdate = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime)
        }
      }

      const handleDurationChange = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration)
        }
      }

      if (audioRef.current) {
        audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
        audioRef.current.addEventListener('loadedmetadata', handleDurationChange)
      }

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
          audioRef.current.removeEventListener('loadedmetadata', handleDurationChange)
        }
      }
    }, [])

    const dropzoneOptions: DropzoneOptions = {
      multiple: false,
      noClick: true,
      noKeyboard: true,
      onDrop: handleFolderDrop,
    }

    const { getInputProps, getRootProps } = useDropzone(dropzoneOptions)

    const handleTrackClick = (index: number) => {
      setCurrentTrackIndex(index)
      setIsPlaying(true)
    }

    const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

      return formattedTime
    }
    const toggleMute = () => {
      if (audioRef.current) {
        if (audioRef.current.volume === 0) {
          updateVolume(1)
        } else {
          updateVolume(0)
        }
      }
    }
    const handleMuteClick = () => {
      toggleMute()
      setIsMuted(!isMuted)
    }
    const handleVolumeRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
      const rangeVolume = parseFloat(event.target.value)

      updateVolume(rangeVolume)
      if (isMuted) {
        setIsMuted(false)
      }
    }

    return (
      <div className={s.player}>
        <audio ref={audioRef} />
        <button onClick={handlePrevious}>
          <Prev className={s.icon} />
        </button>
        <button onClick={handleTogglePlayPause}>
          {isPlaying ? <Pause className={s.icon} /> : <Play className={s.icon} />}
        </button>
        <button onClick={handleNext}>
          <Next className={s.icon} />
        </button>
        <button onClick={handleStop}>
          <Stop className={s.icon} />
        </button>
        <div className={s.volume}>
          <button onClick={handleMuteClick}>
            <Mute className={`${s.volumeButton} ${isMuted ? s.activeMute : ''} ${s.icon}`} />
          </button>
          <input
            className={s.rangeVolume}
            max={'1'}
            min={'0'}
            onChange={handleVolumeRangeChange}
            step={'0.01'}
            type={'range'}
            value={volume}
          />
        </div>
        <div className={s.open}>
          <input
            accept={'audio/*'}
            multiple
            onChange={handleFileChange}
            ref={inputRef}
            style={{ display: 'none' }}
            type={'file'}
          />
          <button onClick={() => inputRef.current?.click()}>
            <Open className={s.icon} />
          </button>
        </div>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
        </div>
        <div className={s.progress}>
          <div>{formatTime(currentTime)}</div>
          <div>
            <input
              max={duration}
              min={0}
              onChange={e => {
                if (audioRef.current) {
                  audioRef.current.currentTime = parseFloat(e.target.value)
                }
              }}
              step={0.01}
              type={'range'}
              value={currentTime}
            />
          </div>
          <div>{formatTime(duration)}</div>
        </div>
        <div className={s.playlist}>
          {addedTracks.map((track, index) => (
            <div className={s.track} key={index} onClick={() => handleTrackClick(index)}>
              {track}
            </div>
          ))}
        </div>
      </div>
    )
  }
)
