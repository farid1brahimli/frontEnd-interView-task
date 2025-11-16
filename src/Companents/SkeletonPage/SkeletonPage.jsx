import React from "react";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import "./SkeletonPage.scss";

const SkeletonPage = () => {
  return (
    <div className="skeleton-page">
      <div className="header-skeleton">
        <div className="h1"></div>
        <div className="input"></div>
        <div className="button"></div>
      </div>
      <div style={{width:"80vw", display: "flex", justifyContent: "space-between", gap:"2vw" }}>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};

export default SkeletonPage;
