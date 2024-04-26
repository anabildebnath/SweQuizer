import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page, sectionName) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      if (!hasMore) {
        // If hasMore is false, no need to fetch more videos
        return;
      }

      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(videosRef, orderByKey(), startAt("" + page));

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          const fetchedVideos = Object.values(snapshot.val()).filter((video) =>
            video.title.toLowerCase().includes(sectionName.toLowerCase())
          );

          if (fetchedVideos.length === 0) {
            setHasMore(false); // No more videos to load
            setLoading(false);
          }

          if (page === 1) {
            setVideos(fetchedVideos);
          } else {
            setVideos((prevVideos) => {
              const uniqueVideos = [];
              prevVideos.forEach((prevVideo) => {
                if (
                  !fetchedVideos.some(
                    (video) => video.youtubeID === prevVideo.youtubeID
                  )
                ) {
                  uniqueVideos.push(prevVideo);
                }
              });
              return [...uniqueVideos, ...fetchedVideos];
            });
          }
        } else {
          setHasMore(false); // No more videos to load
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchVideos();
  }, [page, sectionName, hasMore]); // Including hasMore in the dependency array

  return {
    loading,
    error,
    videos,
    hasMore,
  };
}
