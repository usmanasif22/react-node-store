import PageButtons from "./PageButtons";

const ProductsData = (props) => {
  const { products, totalPages, page, setPage } = props;
  return (
    <div className="products-data">
      {products.map((doc) => (
        <div key={doc.id} className="product-box">
          <div className="product-image">
            <img src={doc.images[0]} alt="productImage" />
          </div>
          <div className="product-in-usa">
            {doc.stockinusa && (
              <div>
                <img
                  id="flagofUSA1"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                  alt="USA Flag"
                ></img>
                <label style={{ marginLeft: "10px" }}>Stock In USA</label>
              </div>
            )}
          </div>

          <div className="product-desc">
            <p className="product-name">{doc.name}</p>
            <p className="product-moq">
              MOQ:{" "}
              <span style={{ marginLeft: "3px", color: "#828385" }}>
                {doc.moq}
              </span>
              <span style={{ marginLeft: "5px", color: "#828385" }}>
                {doc.unit}s
              </span>
            </p>
            <h3>
              <span style={{ marginRight: "3px" }}>$</span>
              {doc.price.toFixed(2)}
              <span style={{ marginLeft: "3px" }}>
                /<span style={{ marginLeft: "3px" }}>{doc.unit}</span>
              </span>
            </h3>
            <button className="addToCart">Add to Cart</button>
          </div>
        </div>
      ))}
      <PageButtons
        totalPages={totalPages}
        setPage={setPage}
        page={page}
        classname="page-buttons2"
      />
    </div>
  );
};

export default ProductsData;
