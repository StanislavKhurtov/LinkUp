import React, { ChangeEvent, forwardRef, useEffect, useRef, useState } from 'react'

import { Mute, Pause, Play, Prev, Rotate, VolMax } from '@/assets/icons'
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
    const [volume, setVolume] = useState(0.5)
    const [isMuted, setIsMuted] = useState(false)
    const [isRepeat, setIsRepeat] = useState(false)
    const [currentPlayingIndex, setCurrentPlayingIndex] = useState<null | number>(null)
    const handleEnded = () => {
      next()
      setCurrentPlayingIndex(null)
    }

    useEffect(() => {
      const handleEnded = () => {
        next()
      }

      if (audioRef.current) {
        audioRef.current.addEventListener('ended', handleEnded)
      }

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleEnded)
        }
      }
    }, [currentTrackIndex])
    const togglePlayPause = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause()
          setCurrentPlayingIndex(null)
        } else {
          audioRef.current.play()
          setCurrentPlayingIndex(currentTrackIndex)
        }
        setIsPlaying(!isPlaying)
      }
    }
    const next = () => {
      const nextIndex = (currentTrackIndex + 1) % srcList.length

      if (isRepeat && nextIndex === 0) {
        stop()
      } else {
        setCurrentTrackIndex(nextIndex)
        setCurrentPlayingIndex(nextIndex)
      }
    }

    const prev = () => {
      const previousIndex = (currentTrackIndex - 1 + srcList.length) % srcList.length

      setCurrentTrackIndex(previousIndex)
      setCurrentPlayingIndex(previousIndex)
    }

    const stop = () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        audioRef.current.removeEventListener('ended', handleEnded)
      }
      setIsPlaying(false)
      setCurrentPlayingIndex(null)
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

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.src = srcList[currentTrackIndex]
        if (isPlaying) {
          audioRef.current.play()
        }
      }

      if (isRepeat && currentTrackIndex === 0) {
        setIsPlaying(false)
      }
    }, [currentTrackIndex, isPlaying, srcList])

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
    const toggleRepeat = () => {
      setIsRepeat(!isRepeat)
    }

    return (
      <div className={s.player}>
        <div className={s.player__control}>
          <audio ref={audioRef} />
          <div className={s.player__progress}>
            <div>{formatTime(currentTime)}</div>
            <input
              className={s.player__range}
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

            <div>{formatTime(duration)}</div>
          </div>
          <div className={s.player__btnBlock}>
            <div onClick={toggleRepeat}>
              <Rotate className={s.icon} />
            </div>
            <div onClick={handlePrevious}>
              <Prev className={s.icon} />
            </div>
            <div onClick={handleTogglePlayPause}>
              {isPlaying ? (
                <Pause className={`${s.icon} ${s.iconPlay}`} />
              ) : (
                <Play className={`${s.icon} ${s.iconPlay}`} />
              )}
            </div>
            <div onClick={handleNext}>
              <Next className={s.icon} />
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
              <div onClick={() => inputRef.current?.click()}>
                <Open className={s.icon} />
              </div>
            </div>
          </div>
          <div className={s.player__volume}>
            <div onClick={handleMuteClick}>
              <Mute
                className={`${s.volumeButton} ${volume === 0 || isMuted ? s.activeMute : ''} ${s.icon} ${s.iconMute}`}
              />
            </div>
            <input
              className={s.player__range}
              max={'1'}
              min={'0'}
              onChange={handleVolumeRangeChange}
              step={'0.01'}
              type={'range'}
              value={volume}
            />
            <div className={`${volume === 1 ? s.activeMute : ''} ${s.icon} ${s.iconMute}`}>
              <VolMax />
            </div>
          </div>
          <div className={s.player__text}>Bluetooth - Airpods</div>
        </div>
        <div className={s.player__playlist}>
          {addedTracks.length === 0 ? (
            <div>Добавить трек</div>
          ) : (
            <div className={s.player__playlist}>
              {addedTracks.map((track, index) => (
                <div className={s.track} key={index} onClick={() => handleTrackClick(index)}>
                  <span
                    className={`${s.track} ${currentPlayingIndex === index ? s.trackName : ''}`}
                  >
                    {track}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
)
