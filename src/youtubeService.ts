import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; // Use environment variable
const CHANNEL_ID = 'UC7361pUdOT7EKWp-K6awlGw'; // Your channel ID

export const getYouTubeVideos = async () => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        channelId: CHANNEL_ID,
        maxResults: 10,
        order: 'date',
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching YouTube videos: ', error);
    throw error;
  }
};
