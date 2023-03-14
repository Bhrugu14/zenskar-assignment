import React, { useEffect, useState } from "react";
import { DragBox } from "../../component";
import { getWithExpiry } from "../../utils/storeData";

export const Preview = (props) => {
  const [boxes, setBoxes] = useState([
    {
      id: new Date().toString(),
      x: 50,
      y: 50,
      data: "button",
    },
  ]);
  const [extra, setExtra] = useState(0);

  useEffect(() => {
    let boxesData = getWithExpiry("position");
    if (Array.isArray(boxesData)) {
      const savedPosition = boxesData || null;
      console.log("savedPosition", savedPosition);
      if (savedPosition) {
        setBoxes(savedPosition);
      } else {
        setBoxes([
          {
            id: new Date().toDateString(),
            x: 50,
            y: 50,
            data: "button",
          },
        ]);
      }
    }
  }, []);

  return (
    <div className="relative h-full w-screen">
      <div className="h-full w-full bg-background">
        {boxes.map((box, k) => (
          <DragBox
            disabled
            key={"preview" + box.id + k}
            x={box.x}
            y={box.y}
            component={box.data}
          />
        ))}
      </div>
    </div>
  );
};
