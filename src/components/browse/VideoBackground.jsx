
const VideoBackground = () => {
  return (
    <div className="">
        <video className="hidden md:w-full h-[80vh] object-cover fixed left-0 right-0 top-0 bottom-0 -z-1 opacity-75 background-video" 
                autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
            <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default VideoBackground