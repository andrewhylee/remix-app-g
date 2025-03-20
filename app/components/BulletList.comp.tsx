import React from "react";

type BulletListProps = {
  header: string;
  listItems: string[] | [];
  bulletImgSrc: string;
};

export const BulletList: React.FC<BulletListProps> = (props) => {
  return (
    <>
      <div className="text_subtitle_2 py-6">{props.header}</div>
      <ul className="flex flex-col gap-3 text_body">
        {props.listItems.length &&
          props.listItems.map((listItem, i) => (
            <li key={i} className="flex gap-3">
              <img src="/green_arrow_xs.png" alt="green arrow bullet point" />
              {listItem}
            </li>
          ))}
      </ul>
    </>
  );
};
