import React from "react";

export default function BoxesItem(props) {
  const { item } = props;

  return (
    <div className="jikan-card card">
      <a
        className="jikan-card-image"
        href={item.url}
        style={{ backgroundImage: `url(${item.image_url})` }}
      >
        <div className="jikan-card-badge d-flex justify-content-between">
          <span className="badge badge-primary">{item.type}</span>
          <span className="badge badge-danger">
            {item.episodes ? `Ep: ${item.episodes}` : ""}
          </span>
        </div>
        <div className="jikan-card-badge position-bottom-0 d-flex justify-content-end">
          <span className="badge badge-success">
            <i className="fa fa-star mr-1" aria-hidden="true"></i>
            {item.score}
          </span>
        </div>
        {/* <div className="bg-danger jikan-card-time-schedule">Jan 2021</div> */}
      </a>
      <div className="card-body">
        <a className="h5 jikan-card-title" href={item.url}>
          {item.title}
        </a>
      </div>
    </div>
  );
}
