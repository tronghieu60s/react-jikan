import React from "react";

export default function PostsItem(props) {
  const { item } = props;

  return (
    <div className="col-sm-6 col-md-6 col-lg-4">
      <div className="card">
        <a
          className="jikan-card-image"
          href={item.url}
          style={{
            backgroundImage: `url(${item.image_url})`,
          }}
        ></a>
        <div className="card-body">
          <div className="jikan-card-badge d-flex justify-content-between">
            <span className="badge badge-primary mb-3">{item.type}</span>
            <span className="badge badge-primary mb-3">
              {item.episodes ? `Ep: ${item.episodes}` : ""}
            </span>
          </div>
          <a href={item.url}>
            <h3 className="card-title">{item.title}</h3>
          </a>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
}
