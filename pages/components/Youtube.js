// Use an external compmenet to render DeveloPop videos.

import YouTube from 'react-youtube';

const YouTubeComponent = ({ videoid }) => {
    const opts = {
        height: '360',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return <YouTube videoid={videoid} opts={opts} />;
};

export default YouTubeComponent;