import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; // Use environment variable
const CHANNEL_ID = 'UC7361pUdOT7EKWp-K6awlGw'; // Your channel ID

const getUploadsPlaylistId = async () => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
      params: {
        part: 'contentDetails',
        id: CHANNEL_ID,
        key: API_KEY,
      },
    });
    const uploadsPlaylistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;
    return uploadsPlaylistId;
  } catch (error) {
    console.error('Error fetching uploads playlist ID:', error);
    throw error;
  }
};

export const getLatestYouTubeVideo = async () => {
  try {
    const uploadsPlaylistId = await getUploadsPlaylistId();
    const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'snippet,contentDetails',
        playlistId: uploadsPlaylistId,
        maxResults: 1,
        key: API_KEY,
      },
    });

    const latestVideo = response.data.items[0];
    console.log('Latest video fetched:', latestVideo);
    return {
      id: latestVideo.contentDetails.videoId,
      snippet: latestVideo.snippet,
    };
  } catch (error) {
    console.error('Error fetching latest YouTube video:', error);
    throw error;
  }
};
