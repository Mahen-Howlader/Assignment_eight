import { useLoaderData, useParams } from "react-router";
import useDataget from "../../Coustome Hooks/useDataget";
import { useEffect, useState } from "react";
import { getLocalStoresSetData, getLocalStoresSetDataWishlist } from "../../utils/utilitis";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Bookdetails() {
  const [detailsData, setDetailsData] = useState({});
  const { clickID } = useParams();
  const { data, loading } = useDataget();

  function successAlert(){
    toast.success(" be added to the list. !");
  }
  function errorAlert(){
    toast.error("already been added!");
  }

  useEffect(() => {
    if (data) {
      const fin = data.find((val) => val.bookId === +clickID);
      setDetailsData(fin);
    }else{
      alert("already data")
    }
  }, [clickID, data]);
  // console.log(detailsData.bookId);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = detailsData || {};
  return (
    <div>
      <div>
        <div className="lg:m-20">
          <div className="lg:flex ">
            <div className="lg:flex-1 flex justify-center items-center bg-base-200 rounded-lg">
              <img className="min-w-64 lg:min-w-80" src={image} />
            </div>
            <div className="mt-5 lg:mt-0 lg:ml-20 lg:flex-1">
              <div className="space-y-3">
                <h1 className="text-2xl font-bold">{bookName}</h1>
                <p className="">By: {author}</p>
                <hr />
                <h2>fiction</h2>
                <hr></hr>
                <p className="font-bold">
                  Review : <span className="font-normal">{review}</span>
                </p>
                <p className="font-bold flex gap-x-10 items-center">
                  Tags :
                  <span className="font-normal flex list-none gap-x-4">
                    {tags &&
                      tags.map((val, index) => (
                        <li
                          key={index}
                          className="bg-[#F3F3F3] p-2 rounded-lg font-semibold text-[#23BE0A]"
                        >
                          #{val}
                        </li>
                      ))}
                  </span>
                </p>
              <hr />
              </div>
              <div className="space-y-2 mt-2">
                <h2>
                  Number of Pages:{" "}
                  <span className="font-bold">{totalPages}</span>
                </h2>
                <h2>
                  Publisher: <span className="font-bold">{publisher}</span>
                </h2>
                <h2>
                  Year of Publishing:{" "}
                  <span className="font-bold">{yearOfPublishing}</span>
                </h2>
                <h2>
                  Rating: <span className="font-bold">{rating}</span>
                </h2>
              </div>
              <div className="my-10 flex gap-x-5">
                <button onClick={()=>getLocalStoresSetData(detailsData,"read",successAlert,errorAlert)} className="btn btn-outline btn-info hover:bg-[#50B1C9] hover:border-none">Read</button>
                <button onClick={()=>getLocalStoresSetDataWishlist(detailsData,"read","wishlist",successAlert,errorAlert)} className="btn hover:bg-none bg-[#50B1C9]">Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Bookdetails;
