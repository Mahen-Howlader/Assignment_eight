import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getLocalStoresGetData } from "../utils/utilitis";
import Readpage from "../Containers/all component/Readpage";
import { useEffect, useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
function ListesBook() {
  const [getRead, setgetRead] = useState([]);
  const [getReadFilters, setReaddatafilters] = useState([]);

  const [getWishList, setgetWishList] = useState([]);
  useEffect(() => {
    const getRead = getLocalStoresGetData("read");
    setgetRead(getRead);
    setReaddatafilters(getRead);
    const getWishList = getLocalStoresGetData("wishlist");
    setgetWishList(getWishList);
  }, []);

  var byDate = getRead.slice(0);
  function handelSortData(sort) {
    if (sort === "Rating") {
      byDate.sort(function (a, b) {
        return b.rating - a.rating;
        // console.log(a)
      });
      setReaddatafilters(byDate);
    } else if (sort === "page") {
      byDate.sort(function (a, b) {
        return b.totalPages - a.totalPages;
        // console.log(a)
      });
      setReaddatafilters(byDate);
    } else if (sort === "publish") {
      byDate.sort(function (a, b) {
        return b.yearOfPublishing - a.yearOfPublishing;
        // console.log(a)
      });
      setReaddatafilters(byDate);
    }
    else if (sort === "all") {
      byDate.sort(function (a, b) {
        return b.yearOfPublishing - a.yearOfPublishing;
        // console.log(a)
      });
      setReaddatafilters(byDate);
    }
  }
  // console.log(getReadFilters);
  const navigate = useNavigate()
  function goBackHanel(){
    navigate(-1)
  }

  return (
    <div>
      <div className="p-10 text-3xl font-bold text-center rounded-lg bg-base-200">
        <h1>Books</h1>
      </div>
      <div className="flex justify-center my-5">
        <div className="relative w-48">
          <select
            onChange={(e)=> handelSortData(e.target.value)}
            className="block bg-[#23BE0A] appearance-none w-full  font-bold text-white hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline "
            id="grid-state"
          >
            <option value={"all"}>All</option>
            <option value={"Rating"}>Rating</option>
            <option value={"page"}>Number of pages</option>
            <option value={"publish"}>Publisher year</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            {getReadFilters.map((val) => (
              <Readpage key={val.bookId} data={val}></Readpage>
            ))}
           
          </TabPanel>
          <TabPanel>
            {getWishList.map((val) => (
              <Readpage key={val.bookId} data={val}></Readpage>
            ))}
          </TabPanel>
        </Tabs>
      </div>
      <div className="mb-10">
              <div  className="flex justify-center space-x-4">
                <button
                onClick={() => goBackHanel()}
                  type="button"
                  className="px-6 py-2 border hover:bg-[#23BE0A] hover:text-white rounded-md dark:border-violet-600"
                >
                  Go Back
                  <span className="sr-only sm:not-sr-only"></span>
                </button>
                <Link to="/"
                  type="button"
                  className="px-6 py-2 border hover:bg-[#23BE0A] hover:text-white rounded-md dark:border-violet-600"
                >
                  Go Home
                  <span className="sr-only sm:not-sr-only"></span>
                </Link>
              </div>
            </div>
    </div>
  );
}

export default ListesBook;
