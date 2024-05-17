import React, { useEffect, useState } from 'react';
import { getYouTubeVideos } from '../youtubeService'; // Adjust the path if necessary

const YouTubeVideos: React.FC = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await getYouTubeVideos();
      setVideos(fetchedVideos);
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Latest YouTube Videos</h2>
      <ul>
        {videos.map((video: any) => (
          <li key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubeVideos;
