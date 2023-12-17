import YouTube, { YouTubeProps } from 'react-youtube'

export default function Youtube({
  height = '390',
  width = '640',
  videoId = '2g811Eo7K8U',
}) {
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
