function ListesBook() {
  return (
    <div>
      <div className="p-10 text-3xl font-bold text-center rounded-lg bg-base-200">
        <h1>Books</h1>
      </div>
      <div className="flex justify-center my-2">
      <details className="dropdown">
        <summary className="m-1 btn bg-[#23BE0A]  text-white ">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box w-36">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
      </div>
    </div>
  );
}

export default ListesBook;
