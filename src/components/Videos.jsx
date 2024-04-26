import React from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

export default function Videos(  { sectionName ,style}) {
  const [page] = useState(0);
  const { loading, error, videos, hasMore } = useVideoList(page, sectionName);

  // Filter videos based on sectionName
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(sectionName.toLowerCase())
  );

  return (
    <div>
      {!loading && <div>{sectionName}</div>}

      {videos.length > 0 && hasMore && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          // loader="loading..."
        >
          {filteredVideos.map((video) => {
            return (
              <Link
                to={{
                  pathname: `/quiz/${video.youtubeID}`,
                  state: {
                    videoTitle: video.title,
                  },
                }}
                key={video.youtubeID}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            );
          })}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
