import React, { useState } from "react";
import LendButton from "./LendButton";
import "../../Styles/contentCard.scss";
import { ImLocation } from "react-icons/im";
import { Progress } from "@chakra-ui/react";

const ContentCard = ({ item }) => {
  //  console.log(item)
  const [lend, setLend] = useState(25000);

  return (
    <div className="contentCard">
      
      <div className="leftContent">
        <div className="imgDiv">
          <img src={item.image} alt="" />
        </div>
        <Progress
          hasStripe
          height='32px'
          isAnimated="true"
          value={
            (Number(item.funded) /
              (Number(item.required) + Number(item.funded))) *
            100
          }
          colorScheme="pink"
          style={{borderRadius: "6px", border: "1px solid gray"}}
        />
        <div className="fundDetails">
          <div className="funded">
            <p>Funded</p>
            <p>₹ {item.funded}</p>
          </div>
          <div className="requires">
            <p>Still Requires</p>
            <p>₹ {item.required}</p>
          </div>
        </div>
        <LendButton name={"Complete the Loan"} />
      </div>

      <div className="rightContent">
        <div className="aboutLend">
          <h2>{item.title}</h2>
          <div>
            <ImLocation />
            <h6>{item.location}</h6>
          </div>
          <p>Purpose: {item.Purpose}</p>
          <p>{item.description}</p>
        </div>
        <div className="lendMoney">
          <button>₹</button>
          <input
            type="number"
            value={lend}
            onChange={(e) => setLend(e.target.value)}
          />
          <LendButton name={"Lend"} />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
