import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  changeStatus,
  sortItems,
  sortPosition,
  currentUser,
} from "../../actions";
import "./style.css";

const DataTable = ({ users, setInfoIsVisible }) => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.status);

  const showUserInfo = (info) => {
    dispatch(
      currentUser({
        ...info,
      })
    );
    setInfoIsVisible(true);
  };

  const handleSortPosition = (sortedElem) => {
    const [elemStatus] = status.filter((item) => item.name === sortedElem);

    dispatch(
      sortPosition({
        sortedItem: sortedElem,
        ascending: elemStatus.ascending,
      })
    );
    dispatch(
      changeStatus({
        name: sortedElem,
      })
    );
  };

  const handleSortElements = (sortBy) => {
    const [elem] = status.filter((item) => item.name === sortBy);

    dispatch(
      sortItems({
        sortedItem: sortBy,
        ascending: elem.ascending,
      })
    );
    dispatch(
      changeStatus({
        name: sortBy,
      })
    );
  };

  return (
    <table cellPadding={2} cellSpacing={0}>
      <thead>
        <tr>
          <th onClick={() => handleSortPosition("position")}>ID</th>
          <th onClick={() => handleSortElements("firstName")}>First Name</th>
          <th onClick={() => handleSortElements("lastName")}>Last Name</th>
          <th onClick={() => handleSortElements("email")}>Email</th>
          <th onClick={() => handleSortElements("phone")}> Phone</th>
          <th onClick={() => handleSortElements("state")}>State</th>
        </tr>
      </thead>
      <tbody>
        {users.map(
          ({
            id,
            firstName,
            lastName,
            email,
            phone,
            adress,
            position,
            description,
          }) => {
            return (
              <tr
                key={id + Math.random()}
                onClick={() =>
                  showUserInfo({
                    id,
                    firstName,
                    lastName,
                    email,
                    phone,
                    adress,
                    position,
                    description,
                  })
                }
              >
                <td>{position}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{adress?.state}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default DataTable;
