import React from "react";

export default function PostsItem() {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4">
      <div className="card">
        <a
          className="jikan-card-image"
          href="https://myanimelist.net/anime/47778/Kimetsu_no_Yaiba__Yuukaku-hen"
          style={{
            backgroundImage: `url(https://cdn.myanimelist.net/images/anime/1813/115732.jpg?s=ab9aed5c30625a0f0111cafb547c5cfb)`,
          }}
        ></a>
        <div className="card-body">
          <div className="jikan-card-badge d-flex justify-content-between">
            <span className="badge badge-primary mb-3">Movie</span>
            <span className="badge badge-primary mb-3">03/??</span>
          </div>
          <a href="https://myanimelist.net/anime/47778/Kimetsu_no_Yaiba__Yuukaku-hen">
            <h3 className="card-title">Jujutsu Kaisen 0 Movie</h3>
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
