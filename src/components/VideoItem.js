import './item.css'

function VideoItem({ video,onVideoSelect }) {

    return (
        <div className="item video-item">

            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.default.url} onClick={()=>onVideoSelect(video)} />

            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>

        </div>
    )
}

export default VideoItem;