import React from "react";

const Collapse = ({ title, content }) => {
  const isCollapse = (e) => {
    e.preventDefault();
    const divText = e.target.nextSibling;
    const arrow = e.target.lastChild;

    if (!divText.classList.contains("show")) {
      divText.classList.add("show");
      arrow.classList.add("rotate");
    } else {
      divText.classList.remove("show");
      arrow.classList.remove("rotate");
    }
  };
  return (
    <article className="collapse ">
      <button type="button" className="collapse__button" onClick={isCollapse}>
        {title}

        <p className="collapse__arrow">
          <svg
            width="28"
            height="17"
            viewBox="0 0 28 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z"
              fill="white"
            />
          </svg>
        </p>
      </button>
      <div className="collapse__content">
        {Array.isArray(content) ? (
          <ul className="collapse__list">
            {content.map((equipment, index) => (
              <li key={index} className="collapse__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse__text">{content}</p>
        )}
      </div>
    </article>
  );
};

export default Collapse;
