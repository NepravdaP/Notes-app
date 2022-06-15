import React from "react";
import { useState } from "react";

const Tag = ({ tag, selectedTags, setSelectedTags }) => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((value) => value !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  return (
    <div
      className={isActive ? "tag-wrapper tag-active" : "tag-wrapper"}
      onClick={handleActive}
    >
      <span className={isActive ? "tag-name tag-active" : "tag-name"}>
        {tag}
      </span>
      <div className={isActive ? "tag-round-active" : "tag-round"}></div>
    </div>
  );
};

export default Tag;
