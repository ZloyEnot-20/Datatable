import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByState } from "../../actions";
import "./style.css";

const Select = ({ allUsersArray }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("all");

  const states = useSelector((state) => state.states);

  const handleSelect = (e) => {
    let elem = e.target.options[e.target.selectedIndex].text;
    e.target.size = 1;
    e.target.blur();
    dispatch(
      filterByState([...allUsersArray.filter((item) => item.state === elem)])
    );
    setValue(elem);
  };
  console.log(12);

  return (
    <div>
      <select
        name="select"
        defaultValue={value}
        onFocus={(e) => (e.target.size = 10)}
        onBlur={(e) => (e.target.size = 1)}
        onChange={(e) => {
          handleSelect(e);
        }}
      >
        <option value="all">All</option>
        {states.map((item, index) => {
          return (
            <option value={item} key={Math.random()}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
