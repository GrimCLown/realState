import React from "react";


const servicesCard = ({paragraph1, paragraph2, title}) => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-xl">{title}</h2>
        <p>
        {paragraph1}
        </p>
        <h3 className="font-bold">
          {paragraph2}
        </h3>
      </div>
    </div>
  );
};

export default servicesCard;
