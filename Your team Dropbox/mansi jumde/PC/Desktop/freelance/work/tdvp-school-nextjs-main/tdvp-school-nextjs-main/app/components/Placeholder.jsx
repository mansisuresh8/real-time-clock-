import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Placeholder = ({ count, className }) => {
  return (
    <div>
      <Skeleton className={className} count={count} />
    </div>
  );
};

export default Placeholder;
