import React from "react";
import Tag from "./Tag";

const TagList = ({ tags, selectedTags, setSelectedTags }) => {
  return (
    <div className="tag-list">
      {tags.map((el, ind) => (
        <Tag
          key={ind}
          tag={el}
          setSelectedTags={setSelectedTags}
          selectedTags={selectedTags}
        />
      ))}
    </div>
  );
};

export default TagList;
