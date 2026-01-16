"use client";

const NavbarSearchResult = ({ id,title}) => {
  function onClickHandler() {
    window.location.href = `/posts/${id}`;
  }

  return <div className="search-result-item" onClick={onClickHandler}>
        <p>{title}</p>
  </div>;
};

export default NavbarSearchResult;
