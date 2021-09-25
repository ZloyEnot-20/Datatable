import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
const ExtraInfo = () => {
  const [info] = useSelector((state) => state.currentUser);
  console.log(info);
  return (
    <div className="extra-info">
      <span className="profile">Profile info:</span>
      <span className="name">
        Selected profile: {`${info?.firstName || ""} ${info?.lastName || ""}`}
      </span>
      <span className="description">Decription: {info?.description}</span>
      <span className="address">Address: {info?.adress?.streetAddress}</span>
      <span className="city">City: {info?.adress?.city}</span>
      <span className="state">State: {info?.adress?.state}</span>
      <span className="index">Index: {info?.adress?.zip}</span>
    </div>
  );
};

export default ExtraInfo;
