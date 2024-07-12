/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaMinus, FaPlus, FaToggleOff, FaToggleOn } from "react-icons/fa";
import ProductList from "./productList";

// Reusable Checkbox Component
const Checkbox = ({ id, label }) => (
  <div className="product-detail-list">
    <input type="checkbox" id={id} />
    <label className="m-2 cursor-pointer" htmlFor={id}>
      {label}
    </label>
  </div>
);

// Reusable Filter Section Component
const FilterSection = ({
  title,
  sectionKey,
  details,
  showDetails,
  toggleDetails,
}) => {
  const isExpanded = showDetails[sectionKey];

  return (
    <div>
      <h2
        className="text-sm font-semibold cursor-pointer"
        onClick={() => toggleDetails(sectionKey)}
      >
        {title}
        <span
          className={`absolute left-64 cursor-pointer ${
            isExpanded ? "hidden" : ""
          }`}
        >
          <FaPlus />
        </span>
        <span
          className={`absolute left-64 cursor-pointer ${
            isExpanded ? "" : "hidden"
          }`}
        >
          <FaMinus />
        </span>
      </h2>

      <div
        className={`text-sm cursor-pointe my-2 ${isExpanded ? "" : "hidden"}`}
      >
        {details.map(({ id, label }) => (
          <Checkbox key={id} id={id} label={label} />
        ))}
      </div>
      <div className="width-[17rem] border my-4"></div>
    </div>
  );
};

const ProductFilters = () => {
  const [showDetails, setShowDetails] = useState({
    collection: false,
    origin: false,
    flavour: false,
    qualities: false,
    caffeine: false,
    allergens: false,
    organic: false,
  });

  const toggleDetails = (section) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Define filter details
  const filterDetails = {
    collection: [
      { id: "checkbox-black-teas", label: "Black teas" },
      { id: "checkbox-green-teas", label: "Green teas" },
      { id: "checkbox-white-teas", label: "White teas" },
      { id: "checkbox-chai", label: "Chai" },
      { id: "checkbox-matcha", label: "Matcha" },
      { id: "checkbox-herbal-teas", label: "Herbal teas" },
      { id: "checkbox-oolong", label: "Oolong" },
      { id: "checkbox-rooibos", label: "Rooibos" },
      { id: "checkbox-teaware", label: "Teaware" },
    ],
    origin: [
      { id: "checkbox-india", label: "India" },
      { id: "checkbox-japan", label: "Japan" },
      { id: "checkbox-iran", label: "Iran" },
      { id: "checkbox-south-africa", label: "South Africa" },
    ],
    flavour: [
      { id: "checkbox-spicy", label: "Spicy" },
      { id: "checkbox-sweet", label: "Sweet" },
      { id: "checkbox-citrus", label: "Citrus" },
      { id: "checkbox-smooth", label: "Smooth" },
      { id: "checkbox-fruity", label: "Fruity" },
      { id: "checkbox-floral", label: "Floral" },
      { id: "checkbox-grassy", label: "Grassy" },
      { id: "checkbox-minty", label: "Minty" },
      { id: "checkbox-bitter", label: "Bitter" },
      { id: "checkbox-creamy", label: "Creamy" },
    ],
    qualities: [
      { id: "checkbox-Detox", label: "Detox" },
      { id: "checkbox-Energy", label: "Energy" },
      { id: "checkbox-Relax", label: "Relax" },
      { id: "checkbox-Digestion", label: "Digestion" },
    ],
    caffeine: [
      { id: "checkbox-no-caffeine", label: "No Caffeine" },
      { id: "checkbox-low-caffeine", label: "Low Caffeine" },
      { id: "checkbox-medium-caffeine", label: "Medium Caffeine" },
      { id: "checkbox-high-caffeine", label: "High Caffeine" },
    ],
    allergens: [
      { id: "checkbox-lactose-free", label: "Lactose-free" },
      { id: "checkbox-gluten-free", label: "Gluten-free" },
      { id: "checkbox-nuts-free", label: "Nuts-free" },
      { id: "checkbox-soy-free", label: "Soy-free" },
    ],
  };

  return (
    <section className="flex justify-around mt-10">
      <div className="ml-6">
        {/* Filter sections */}
        <FilterSection
          title="COLLECTION"
          sectionKey="collection"
          details={filterDetails.collection}
          showDetails={showDetails}
          toggleDetails={toggleDetails}
        />

        <FilterSection
          title="ORIGIN"
          sectionKey="origin"
          details={filterDetails.origin}
          showDetails={showDetails}
          toggleDetails={toggleDetails}
        />

        <FilterSection
          title="FLAVOUR"
          sectionKey="flavour"
          details={filterDetails.flavour}
          showDetails={showDetails}
          toggleDetails={toggleDetails}
        />

        <FilterSection
          title="QUALITIES"
          sectionKey="qualities"
          details={filterDetails.qualities}
          showDetails={showDetails}
          toggleDetails={toggleDetails}
        />

        <FilterSection
          title="CAFFEINE"
          sectionKey="caffeine"
          details={filterDetails.caffeine}
          showDetails={showDetails}
          toggleDetails={toggleDetails}
        />

        <FilterSection
          title="ALLERGENS"
          sectionKey="allergens"
          details={filterDetails.allergens}
          showDetails={showDetails}
          toggleDetails={toggleDetails}
        />

        {/* Organic toggle */}
        <div>
          <h2 className="text-sm font-semibold flex items-center gap-20 cursor-pointer">
            ORGANIC
            <span className={`${showDetails.organic ? "hidden" : ""}`}>
              <FaToggleOff />
            </span>
            <span className={` ${showDetails.organic ? "" : "hidden"}`}>
              <FaToggleOn />
            </span>
          </h2>
        </div>
      </div>

      {/* Product list section */}
      <div className="product-lists">
        <div className="sort-by">
          <label>
            <select className="text-sm p-3 cursor-pointer">
              <option value="" disabled selected>
                SORT BY
              </option>
              <option value="">Name</option>
              <option value="">Price</option>
              <option value="">Popularity</option>
            </select>
          </label>
        </div>
        <div className="rate-list" id="rate-list">
          <ProductList />
        </div>
      </div>
    </section>
  );
};

export default ProductFilters;
