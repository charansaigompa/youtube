
export const LIVE_CHAT_COUNT=30;
const API_KEY=import.meta.env.VITE_API_KEY
export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY
export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const YOUTUBE_SEARCHED_VIDEO_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+API_KEY+"&q="
export const COMMENTS_API="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&key="+API_KEY+"&videoId="
