import React, { useContext } from "react";
import RequestContext from "../../contexts/RequestContext";
import { copyToClipboard } from "../../utils/commonFunctions";

export default function SideBar() {
  const { request } = useContext(RequestContext);
  const { url, value } = request;

  return (
    <div className="jikan-request-table bg-white p-4 rounded">
      <h2 className="text-center">Realtime Request</h2>
      <div className="form-group mb-2">
        <a href={url} target="_blank">
          <code className="text-danger my-3">{url}</code>
        </a>
        <small id="helpId" className="form-text text-muted">
          Jikan (時間) is an open-source PHP and REST API for the “most active
          online anime + manga community and database” — MyAnimeList.net. It
          parses the website to satisfy the need for an API.
        </small>
      </div>
      <div style={{ display: value.length === 0 ? 'none' : 'block'}}>
        <div className="form-group mb-0 mt-4">
          <div className="jikan-request-code border p-2">
            {JSON.stringify(value)}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => copyToClipboard(value)}
          >
            Copy To Clipboard
          </button>
        </div>
      </div>
    </div>
  );
}
