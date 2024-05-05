import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";


// Function to fetch videos based on sectionName
async function fetchVideos(sectionName) {
  const db = getDatabase();
  try {
    const snapshot = await get(ref(db, `videos/${sectionName}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
}

export default function useVideoList(sectionName) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);
  //hasmore is supposed to show if there are any more videos 
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchVideos(sectionName)
      .then((data) => {
        if (data) {
          setVideos(data);
        } else {
          setVideos([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [sectionName]);

  return { loading, error, videos, hasMore };
}
