const GOOGLE_API_KEY = "AIzaSyCZ8vgnxD3JM8c0l43jJsP88Z7ScCuYftg";
export const LIVE_CHAT_COUNT = 25;
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const CATEGORIES_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;
export const YOUTUBE_RECOMENDED_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=${GOOGLE_API_KEY}&relatedToVideoId=`;
export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;
