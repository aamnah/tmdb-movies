import YouTube, { YouTubeProps } from 'react-youtube'

interface Props extends YouTubeProps {
  height?: string
  width?: string
}

export default function Youtube({
  height = '720',
  width = '100%',
  videoId = '2g811Eo7K8U',
}: Props) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height,
    width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onPlayerReady}
      style={{ width: '100%', height: '100%', margin: '0 auto' }}
    />
  )
}
