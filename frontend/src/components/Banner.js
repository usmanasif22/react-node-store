import { useState } from "react";
import PageButtons from "./PageButtons";

const Banner = (props) => {

  const {productCount,page,totalPages,setPage,setSelectFilter,selectFilter,path} = props;
  const [showSelectFilters, setShowSelectFilters] = useState(false);
  var selectValue = selectFilter
  if(!selectFilter){selectValue ="Relevance"}

  return (
    <div className="products-details">
      <div className="products-count">
        <h3>Products</h3>
        <p>{productCount} Products</p>
      </div>
      <div className="products-path">
        <p>{path}</p>
      </div>
      <div className="banner">
        <p style={{ color: "#ffffff" }}>
          Placing bulk orders on BuyHive is safe & easy.
        </p>
        <h4 style={{ color: "#ffffff" }}>Click to learn how it works!</h4>
      </div>
      <div className="select-controls" onMouseEnter={()=>setShowSelectFilters(true)} onMouseLeave={()=>setShowSelectFilters(false)}>
        <input  id="select-filters"value={selectValue} onChange={(e)=>setSelectFilter(e.target.value)}/>
        <span>
            <img
              id="filters-dropdown"
              src="https://thebuyhive.com/buy/img/chevronDown.e08abe09.svg"
              alt=""
            />
          </span>
        {
            showSelectFilters && 
            <div className="select-filters-dropdown">
                 <ul  >
                <li onClick={()=>setSelectFilter("Relevance")}>Relevance</li>
                <li onClick={()=>setSelectFilter("Latest")}>Latest</li>
                <li onClick={()=>setSelectFilter("Price Low to High")}>Price Low to High</li>
                <li onClick={()=>setSelectFilter("Price High to Low")}>Price High to Low</li>
                <li onClick={()=>setSelectFilter("MOQ Low to High")}>MOQ Low to High</li>
                <li onClick={()=>setSelectFilter("Rating High to Low")}>Rating High to Low</li>
            </ul>
            </div>
        }
      </div>
      <PageButtons totalPages={totalPages} setPage={setPage} page={page} classname="page-buttons"/>
    </div>
  );
};

export default Banner;
