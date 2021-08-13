import React, { createRef, useEffect } from "react";

export interface CommentProps {
  repo: string;
}

const Comment: React.FC<CommentProps> = React.memo(({ repo }) => {
  const containerRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const utterances = document.createElement("script");

    const attributes = {
      src: "https://utteranc.es/client.js",
      repo,
      "issue-term": "title",
      label: "comment",
      theme: "github-light",
      crossOrigin: "anonymous",
      async: "true"
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    if (containerRef && containerRef.current) {
      containerRef.current.appendChild(utterances);
    }
  }, [repo]);

  return <div id="comment" ref={containerRef} />;
});

export default Comment;
