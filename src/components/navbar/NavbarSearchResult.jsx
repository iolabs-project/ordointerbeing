"use client";

const NavbarSearchResult = ({ slug, title}) => {
  function onClickHandler() {
    window.location.href = `/posts/${slug}`;
  }

  return <div className="search-result-item" onClick={onClickHandler}>
        <p>{title}</p>
  </div>;
};

export default NavbarSearchResult;
