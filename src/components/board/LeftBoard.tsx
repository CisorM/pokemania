import React from "react";

interface BoardCol {
  BoardGenerated: {
    [key: number]: {
      type: string;
    }[];
  };
}

const BoardLeft: React.FC<BoardCol> = ({ BoardGenerated }) => {
  const typesArray = [];
  for (let index = 0; index < 3; index++) {
    const type = BoardGenerated[index].map((type) => type.type);
    typesArray.push(type);
  }

  const types = [...new Set(typesArray.flat())];

  return (
    <div className="grid grid-rows-3 gap-3">
      <div className=""></div>{" "}
      {types.map((type, index) => (
        <div key={index} className="text-right pr-2 h-[100px] capitalize">
          <div className="w-full text-center bg-bgGray rounded-lg px-2 py-2">
            {type}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoardLeft;
