import { Typography } from "@mui/material";
import React from "react";

const like = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.98357 14L6.03052 13.1256C4.21205 11.4106 2.75235 9.91141 1.65141 8.62795C0.550469 7.3445 0 6.01901 0 4.65149C0 3.51937 0.369718 2.57219 1.10915 1.80996C1.84859 1.04774 2.76604 0.666626 3.8615 0.666626C4.40923 0.666626 4.95149 0.787125 5.48826 1.02812C6.02504 1.26912 6.52347 1.68106 6.98357 2.26394C7.49844 1.68106 8.00782 1.26912 8.51174 1.02812C9.01565 0.787125 9.54695 0.666626 10.1056 0.666626C11.2121 0.666626 12.1377 1.04774 12.8826 1.80996C13.6275 2.57219 14 3.51937 14 4.65149C14 6.01901 13.4468 7.3445 12.3404 8.62795C11.234 9.91141 9.77152 11.4106 7.95305 13.1256L6.98357 14ZM6.98357 11.915C8.62676 10.357 9.94953 9.02308 10.9519 7.91337C11.9542 6.80366 12.4554 5.71637 12.4554 4.65149C12.4554 3.94531 12.2336 3.36804 11.7899 2.91967C11.3462 2.47131 10.7848 2.24712 10.1056 2.24712C9.59077 2.24712 9.10055 2.42086 8.63498 2.76835C8.16941 3.11583 7.78326 3.61464 7.47653 4.26478H6.49061C6.19484 3.61464 5.80869 3.11583 5.33216 2.76835C4.85563 2.42086 4.36542 2.24712 3.8615 2.24712C3.19327 2.24712 2.6428 2.47131 2.21009 2.91967C1.77739 3.36804 1.56103 3.94531 1.56103 4.65149C1.56103 5.71637 2.05399 6.80366 3.03991 7.91337C4.02582 9.02308 5.34038 10.357 6.98357 11.915Z"
      fill="#E5E6F7"
    />
  </svg>
);
const star = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99098 4.61538V10.4796L10.4622 12.362L9.47012 9.23077L11.743 7.74661H9.01917L7.99098 4.61538ZM3.08455 16L4.92446 9.93665L0 6.38914H6.06088L7.99098 0L9.92108 6.38914H16L11.0575 9.93665L12.9154 16L8.00902 12.2534L3.08455 16Z"
      fill="#E5E6F7"
    />
  </svg>
);
function CardComment({ title, desc, rate, name }) {
  return (
    <div className="card-comment">
      <div className="card-comment-header">
        <div>
          {like}
          {title}
        </div>
        <hr />
      </div>
      <Typography
        className="card-comment-desc"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "4",
          WebkitBoxOrient: "vertical",
        }}
      >
        {desc}
      </Typography>
      <div className="card-comment-footer">
        <div>{name}</div>
        <div>
          {star}
          {rate}
        </div>
      </div>
    </div>
  );
}

export default CardComment;