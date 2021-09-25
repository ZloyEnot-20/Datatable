import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStates, setData } from "./actions";
import axios from "axios";
import DataTable from "./components/DataTable";
import ExtraInfo from "./components/ExtraInfo";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Select from "./components/Select";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const elemsPerPage = 20;
  const [infoIsVisible, setInfoIsVisible] = useState(false);

  const indexOfLastElem = currentPage * elemsPerPage;
  const indexOfFirstElem = indexOfLastElem - elemsPerPage;
  const users = useSelector((state) => state.data).slice(
    indexOfFirstElem,
    indexOfLastElem
  );

  const [allUsersArray, setAllUsersArray] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        "https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json"
      )
      .then((res) => {
        setAllUsersArray(
          [...res.data].map((item, index) => ({
            ...item,
            position: index + 1,
            state: item.adress.state,
          }))
        );
        dispatch(setData([...res.data]));
        dispatch(
          getStates([
            ...res.data.map((item, index) => ({
              ...item,
              position: index + 1,
              state: item.adress.state,
            })),
          ])
        );
      });
  }, [dispatch]);

  return (
    <div className="App">
      <div className="data-table">
        <header>
          <Search allUsersArray={allUsersArray} />
          <Select
            allUsersArray={allUsersArray}
            setAllUsersArray={setAllUsersArray}
          />
        </header>

        <DataTable users={users} setInfoIsVisible={setInfoIsVisible} />
        {infoIsVisible && <ExtraInfo />}
        <Pagination
          currentPage={currentPage}
          elemsPerPage={elemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
