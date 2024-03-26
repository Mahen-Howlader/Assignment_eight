import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getLocalStoresGetData } from "../utils/utilitis";
import Readpage from "../Containers/all component/Readpage";
import { useEffect, useState } from "react";
function ListesBook() {
  const [getRead, setgetRead] = useState([]);
  const [getWishList, setgetWishList] = useState([]);
  useEffect(() => {
    const getRead = getLocalStoresGetData("read");
    setgetRead(getRead);
    const getWishList = getLocalStoresGetData("wishlist");
    setgetWishList(getWishList);
  }, []);

  return (
    <div>
      <div className="p-10 text-3xl font-bold text-center rounded-lg bg-base-200">
        <h1>Books</h1>
      </div>
      <div className="flex justify-center my-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="m-1 btn bg-[#23BE0A]  text-white ">
            Sort by
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box w-36"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            {getRead.map((val) => (
              <Readpage key={val.bookId} data={val}></Readpage>
            ))}
            <div className="mb-10">
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  className="px-6 py-2 border rounded-md dark:border-violet-600"
                >
                  Back
                  <span className="sr-only sm:not-sr-only">to shop</span>
                </button>
                <button
                  type="button"
                  className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
                >
                  <span className="sr-only sm:not-sr-only">Continue to</span>
                  Checkout
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            {getWishList.map((val) => (
              <Readpage key={val.bookId} data={val}></Readpage>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default ListesBook;
