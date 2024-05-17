import React, { useEffect, useState } from 'react';
import { getLatestYouTubeVideo } from '../youtubeService';

interface Video {
  id: string;
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
  const [video, setVideo] = useState<Video | null>(null);
  const [error, setError] = useState<CustomError | null>(null);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const fetchedVideo = await getLatestYouTubeVideo();
        setVideo(fetchedVideo);
      } catch (err: any) {
        setError({ message: err.message });
      }
    };
    fetchLatestVideo();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Latest YouTube Video</h2>
      {error ? (
        <div className="text-red-500 text-center">Error fetching video: {error.message}</div>
      ) : (
        video && (
          <div className="shadow-lg p-6 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">{video.snippet.title}</h3>
            <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default YouTubeVideos;
