import { RingLoader } from "react-spinners";
import useDataget from "../../Coustome Hooks/useDataget";
import Cart from "./Cart";

function Bookscart() {
   const {data,loading} = useDataget()
    return (
        <div>
            <h1 className="text-4xl text-center font-bold">Books</h1>
           <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
           {
                data.map(val => <Cart data={val} loading={loading} key={val.bookId}></Cart>)
            }
           </div>
        </div>
    );
}

export default Bookscart;