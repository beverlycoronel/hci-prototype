import { IoMdArrowDropdown } from "react-icons/io";
function SearchDropdown() {
  return (
    <>
      <div className="dropdown">

        <button className="result-button-sort">
                 Sort By
                <div className="dropdown"> <IoMdArrowDropdown/></div>
        </button>
        <div className="dropdown-content">
          <a href="#">Posted: Earliest</a>
          <a href="#">Posted: Latest</a>
          <a href="#">Salary: Low to High</a>
          <a href="#">Salary: High to Low </a>
          <a href="#">Location: Nearest to Furthest</a>
          <a href="#">Location: Furthest to Nearest</a>
          <a href="#">Exp Level: Lowest to Highest</a>
          <a href="#">Exp Level: Highest to Lowest</a>
        </div>
      </div>
    </>
  );
}

export default SearchDropdown;
