import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={464}
    viewBox="0 0 280 464"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="296" rx="10" ry="10" width="276" height="20" />
    <circle cx="134" cy="136" r="125" />
    <rect x="-1" y="432" rx="10" ry="10" width="92" height="30" />
    <rect x="0" y="334" rx="10" ry="10" width="280" height="88" />
    <rect x="123" y="433" rx="10" ry="10" width="152" height="30" />
    <rect x="189" y="447" rx="0" ry="0" width="0" height="4" />
  </ContentLoader>
);

export default SkeletonLoader;
