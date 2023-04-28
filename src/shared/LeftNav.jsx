import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategoris] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategoris(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h4 className="fw-bold">All Category</h4>
      <div className="ms-3">
      {categories.map((category) => (
        <p className="mt-3" key={category.id}>
          <Link className="text-decoration-none text-secondary fs-5 fw-semibold" to={`category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
      </div>
    </div>
  );
};

export default LeftNav;
