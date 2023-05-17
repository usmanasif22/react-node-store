import { useEffect, useState } from "react";
import Banner from "./Banner";
import Sidebar from "./SideBar";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/productSlice";
import ProductsData from "./ProductsData";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [selectFilter, setSelectFilter] = useState("");
  const [moq, setMoq] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [country, setCountry] = useState("");
  const [cerificate, setCertificates] = useState("");
  const [supplierCerificates, setSupplierCertificates] = useState("");
  const [inUsa, setInUsa] = useState("");
  const totalPages = Math.ceil(totalProducts / 9);
  var countries;
  var certificates;
  var suppliers;
  var path = "Buy";

  if (keyword.length > 0) {
    path = "Showing Results for " + keyword;
  } else if (mainCategory.length > 0) {
    path = "Buy/" + mainCategory;
  } else {
    path = "Buy";
  }

  if (country.length > 0) {
    countries = country.join(",");
  } else {
    countries = country;
  }

  if (cerificate.length > 0) {
    certificates = cerificate.join(",");
  } else {
    certificates = cerificate;
  }

  if (supplierCerificates.length > 0) {
    suppliers = supplierCerificates.join(",");
  } else {
    suppliers = supplierCerificates;
  }

  const url = `http://localhost:8000/products/?page=${page}&sortby=${selectFilter}&subcategory=${category}&keyword=${keyword}&moq=${moq}&minPrice=${minPrice}&maxPrice=${maxPrice}&country=${countries}&certificate=${certificates}&supplier=${suppliers}&inUsa=${inUsa}&category=${mainCategory}`;

  useEffect(() => {
    setPage(1);
  }, [
    minPrice,
    maxPrice,
    moq,
    keyword,
    country,
    category,
    supplierCerificates,
    mainCategory,
    inUsa,
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch(url)
        .then(async (result) => {
          const products = await result.json();
          setTotalProducts(products.total);
          dispatch(setProducts(products.products));
        })
        .catch((err) => console.log(err));
    };
    fetchProducts();
  }, [url, dispatch]);

  return (
    <div className="product-container">
      <Header
        keyword={keyword}
        setKeyword={setKeyword}
        setCategory={setCategory}
        setMainCategory={setMainCategory}
      />

      <Banner
        path={path}
        productCount={totalProducts}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        setTotalProducts={setTotalProducts}
        setSelectFilter={setSelectFilter}
        selectFilter={selectFilter}
      />

      {!totalProducts ? (
        <div id="loading">No Products Found</div>
      ) : (
        <ProductsData
          products={products}
          totalPages={totalPages}
          page={page}
          setPage={setPage}
        />
      )}
      <Sidebar
        setInUsa={setInUsa}
        setMoq={setMoq}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setCountry={setCountry}
        country={country}
        setCertificates={setCertificates}
        setSupplierCertificates={setSupplierCertificates}
      />
    </div>
  );
};
export default Products;
