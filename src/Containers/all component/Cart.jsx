// bg-[#23BE0A]
import { NavLink } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
function Cart({ data }) {
  const {
    bookId,
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
  } = data;
  return (
    <div>
      <NavLink to={`/bookdetails${bookId}`} className="card  bg-base-100 shadow-xl border">
        <figure className="px-10 m-10 mb-0  pt-10 bg-[#F3F3F3]">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body p-10 text-start">
          <div className="flex items-center gap-10">
            <button className="bg-[#F3F3F3] p-2 rounded-lg font-semibold text-[#23BE0A] text-">
              Young adult
            </button>
            <button className="bg-[#F3F3F3] p-2 rounded-lg font-semibold text-[#23BE0A] text-">
              Identify
            </button>
          </div>
          <h2>{bookName}</h2>
          <h2 className="font-semibold">By : {author}</h2>
          <hr className="border-dashed border" />
          <div className="flex justify-between">
            <h1>Fiction</h1>
            <div className="flex items-center gap-x-4">
                <h2>{rating}</h2>
                <FaRegStar />
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Cart;
