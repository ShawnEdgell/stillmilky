import React, { useEffect, useState } from 'react';
import { getYouTubeVideos } from '../youtubeService';

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface CustomError {
  message: string;
}

const YouTubeVideos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<CustomError | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideos = await getYouTubeVideos();
        setVideos(fetchedVideos);
      } catch (err: any) {
        setError({ message: err.message });
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Latest YouTube Videos</h2>
      {error ? (
        <div className="text-red-500 text-center">Error fetching videos: {error.message}</div>
      ) : (
        <ul className="space-y-6">
          {videos.map((video) => (
            <li key={video.id.videoId} className="shadow-lg p-6 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">{video.snippet.title}</h3>
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YouTubeVideos;
