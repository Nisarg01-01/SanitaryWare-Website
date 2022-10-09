import React from "react";
import "./Services.css";
import { TbTruckDelivery ,} from "react-icons/tb";
import { AiOutlineSafety ,} from "react-icons/ai";
import { MdPayments,} from "react-icons/md";

const Services = () => {
  return <div className="services">
    <div className="grid3Col">
      <div className="grid3Col__item">
        <div  className="items">
          <TbTruckDelivery className="icon"/>
          <h3>Super Fast Delivery</h3>
        </div>
        <div className="items">
          <AiOutlineSafety className="icon" />
          <h3>Non-Contact Delivery</h3>
        </div>
        <div className="items">
          <MdPayments className="icon" />
          <h3>Easy Payment</h3>
        </div>
      </div>
    </div>
  </div>;
};

export default Services;
