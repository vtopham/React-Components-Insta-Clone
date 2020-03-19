// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {

  const {allData, setAllData, myData, setMyData} = props;
  
  function filterResults (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      const filterCriteria = e.target.value;
      if (filterCriteria === "") {
        setMyData(allData);
      } else {
      const filteredArray = allData.filter((e) => {
        return e.username === filterCriteria;
      })
        setMyData(filteredArray);
      }
    }
  }

  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram" />
        <img className = "logo-image" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt= "instagram logo"/>
      </div>
      <form className="search-form" onKeyDown={filterResults}>
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
