import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; // Use environment variable
const CHANNEL_ID = 'UC7361pUdOT7EKWp-K6awlGw'; // Your channel ID

const getUploadsPlaylistId = async () => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
    params: {
      part: 'contentDetails',
      id: CHANNEL_ID,
      key: API_KEY,
    },
  });

  const uploadsPlaylistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;
  return uploadsPlaylistId;
};

export const getYouTubeVideos = async () => {
  const uploadsPlaylistId = await getUploadsPlaylistId();

  const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
    params: {
      part: 'snippet,contentDetails',
      playlistId: uploadsPlaylistId,
      maxResults: 10,
      key: API_KEY,
    },
  });

  return response.data.items.map((item: any) => ({
    id: { videoId: item.contentDetails.videoId },
    snippet: item.snippet,
  }));
};
