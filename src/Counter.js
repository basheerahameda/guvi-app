import { useState } from "react";
import React from "react";

import IconButton from "@mui/material/IconButton";

import Badge from "@mui/material/Badge";

export function Counter() {
  //let like = 10;
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);

  return (
    <div className="like-dislike">
      <span>
        <IconButton
          color="primary"
          value="Like"
          onClick={() => setlike(like + 1)}
          aria-label="Like Movie"
        >
          <Badge badgeContent={like} color="primary">
            👍
          </Badge>
        </IconButton>
        <IconButton
          color="error"
          value="disLike"
          onClick={() => setdislike(dislike + 1)}
          aria-label="Dislike Movie"
        >
          <Badge badgeContent={dislike} color="error">
            👎
          </Badge>
        </IconButton>
      </span>
    </div>
  );
}
