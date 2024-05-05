import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Video from "./Video";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";
import classes from "../styles/Videos.module.css"

export default function Videos() {
  const { topicName } = useParams(); // Use useParams to get the topicName from the URL
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const db = getDatabase();
      const videosRef = ref(db, `videos/${topicName}`);
      const videosQuery = query(videosRef, orderByKey());

      try {
        setLoading(true);
        setError(null);

        const snapshot = await get(videosQuery);

        if (snapshot.exists()) {
          setVideos(Object.values(snapshot.val()));
        } else {
          setVideos([]);
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, [topicName]);

  return (
    <div className={classes.videosContainer}>
      {!loading && <div>{topicName}</div>}

      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
        >
          {videos.map((video) => (
            <Link to={{
                  pathname: `/quiz/${video.youtubeID}`,
                  state: {
                    videoTitle: video.title,
                  },
                }}
                key={video.youtubeID}>
                    <div key={video.youtubeID}>
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            </div>
            </Link>
      
          ))}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
