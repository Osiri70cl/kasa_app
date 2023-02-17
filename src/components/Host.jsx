import React from "react";

const Host = ({ host }) => {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <figure className="host">
      <figcaption className="host__name">
        <p className="host__firstname">{name.trim()}</p>
        <p className="host__lastname">{lastname.trim()}</p>
      </figcaption>

      <img src={host.picture} alt="photo du gérant" className="host__picture" />
    </figure>
  );
};

export default Host;
