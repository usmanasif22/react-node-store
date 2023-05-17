import { useEffect, useState } from "react";
import Filter from "./Filter";
const Sidebar = (props) => {
  const {
    setMoq,
    setMinPrice,
    setMaxPrice,
    setCountry,
    setCertificates,
    setInUsa,
    setSupplierCertificates,
  } = props;

  //Filters
  const [moqInput, setMoqInput] = useState("");
  const [minPriceInput, setMinPriceInput] = useState("");
  const [maxPriceInput, setMaxPriceInput] = useState("");
  const [countryCheckbox, setCountryCheckbox] = useState([]);
  const [certificateCheckbox, setCertificateCheckbox] = useState([]);
  const [supplierCheckbox, setSupplierCheckbox] = useState([]);
  const [inUsaCheckbox, setInUsaCheckbox] = useState(false);
  //Checkboxes Lits
  const [productCertificatesText, setProductCertificatesText] = useState("");

  const productCertifications = [
    "ASTM",
    "CE",
    "Certificate of Compliance",
    "Certificate of Conformity",
    "EN",
    "EPA",
    "FCC",
    "FDA",
    "GB",
    "Green Clean Certificate",
    "Intertek",
    "ISO 11439:2000",
    "ISO 11439:2013",
    "ROHS",
    "SGS",
  ];
  const supplierCertifications = [
    "DUNS",
    "DRS",
    "GMP",
    "ISO 13485",
    "ISO 9001",
    "ISO 9001:2015",
  ];
  const countries = [
    "Australia",
    "Canada",
    "China",
    "Hong Kong",
    "India",
    "Korea",
    "United Kingdom",
    "United States",
    "Vitenam",
  ];

  useEffect(() => {
    if (moqInput) {
      setMoq(moqInput);
    } else {
      setMoq(moqInput);
    }

    if (minPriceInput) {
      setMinPrice(minPriceInput);
    } else {
      setMinPrice(minPriceInput);
    }

    if (maxPriceInput) {
      setMaxPrice(maxPriceInput);
    } else {
      setMaxPrice(maxPriceInput);
    }

    if (countryCheckbox.length > 0) {
      setCountry(countryCheckbox);
    } else if (countryCheckbox.length < 1) {
      setCountry("");
    }

    if (certificateCheckbox.length > 0) {
      setCertificates(certificateCheckbox);
    } else if (certificateCheckbox.length < 1) {
      setCertificates("");
    }

    if (supplierCheckbox.length > 0) {
      setSupplierCertificates(supplierCheckbox);
    } else if (supplierCheckbox.length < 1) {
      setSupplierCertificates("");
    }

    if (inUsaCheckbox) {
      setInUsa(true);
    } else if (!inUsaCheckbox) {
      setInUsa("");
    }
  }, [
    moqInput,
    minPriceInput,
    maxPriceInput,
    countryCheckbox,
    certificateCheckbox,
    inUsaCheckbox,
    supplierCheckbox,
  ]);

  return (
    <div className="side-bar">
      <h4>Price</h4>
      <input
        className="price-filter"
        type="number"
        placeholder="from"
        onChange={(e) => setMinPriceInput(e.target.value)}
      />
      <span id="d1">$</span>
      <span id="range">
        <hr />
      </span>
      <input
        className="price-filter"
        type="number"
        placeholder="to"
        onChange={(e) => setMaxPriceInput(e.target.value)}
      />
      <span id="d2">$</span>

      <h4>MOQ</h4>
      <input
        className="moq-filter"
        type="number"
        placeholder="less than"
        onChange={(e) => {
          setMoqInput(e.target.value);
        }}
      />
      <Filter
        array={productCertifications}
        name="Product Certification"
        placeholder="Product Certification..."
        checkboxArray={certificateCheckbox}
        setCheckboxArray={setCertificateCheckbox}
      />
      <Filter
        array={supplierCertifications}
        name="Supplier Certification"
        placeholder="Supplier Certification.."
        checkboxArray={supplierCheckbox}
        setCheckboxArray={setSupplierCheckbox}
      />
      <Filter
        array={countries}
        name="Manufacturer Location"
        placeholder="Country/Region"
        checkboxArray={countryCheckbox}
        setCheckboxArray={setCountryCheckbox}
      />

      <div className="avail-in-USA">
        <h4>Stock Availability</h4>
        <input
          type="checkbox"
          id=""
          value=""
          onChange={() => setInUsaCheckbox(!inUsaCheckbox)}
        />
        <img
          id="flagofUSA"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
          alt="USA Flag"
        ></img>
        <label style={{ marginLeft: "10px" }} >In USA</label>
      </div>
    </div>
  );
};

export default Sidebar;
