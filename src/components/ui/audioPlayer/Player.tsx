import React, { ChangeEvent, forwardRef, useEffect, useRef, useState } from 'react'
import { DropzoneOptions, useDropzone } from 'react-dropzone'

import { Button } from '@/components/ui'

type PlayerProps = {
  srcList: string[]
}

export const Player = forwardRef(
  ({ srcList }: PlayerProps, ref: React.ForwardedRef<HTMLAudioElement>) => {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [addedTracks, setAddedTracks] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null)

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

    const dropzoneOptions: DropzoneOptions = {
      multiple: false,
      noClick: true,
      noKeyboard: true,
      onDrop: handleFolderDrop,
    }

    const { getInputProps, getRootProps, isDragActive } = useDropzone(dropzoneOptions)

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
        <input max={1} min={0} onChange={handleVolumeChange} step={0.01} type={'range'} />
        <input
          accept={'audio/*'}
          multiple
          onChange={handleFileChange}
          ref={inputRef}
          style={{ display: 'none' }}
          type={'file'}
        />
        <Button onClick={() => inputRef.current?.click()} variant={'primary'}>
          Add Music
        </Button>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the music folder here...</p>
          ) : (
            <p>Drag and drop a music folder here, or click to select a folder</p>
          )}
        </div>
        <ul>
          {addedTracks.map((track, index) => (
            <li key={index}>{track}</li>
          ))}
        </ul>
      </div>
    )
  }
)
