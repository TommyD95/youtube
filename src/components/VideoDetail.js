function VideoDetail({ video }) {
     const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        video = ! null ?

            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">
                        {video.snippet.title}
                    </h4>
                    <p>
                        {video.snippet.description}
                    </p>
                </div>
            </div>

            : <div>loading...</div>
    )
}

export default VideoDetail;