/// <reference types="node" />
import { Job, TagOptions } from "./models";

interface JobResultProps {
  job: Job;
  tags: TagOptions;
}
function JobResult({ job, tags }: JobResultProps) {
  return (
    <div className="result">
      <div className="result-container">
        <div className="result-image">
          <img
            width="56"
            src={job.image}
            loading="lazy"
            height="56"
            alt="Logo"
            className="result-img-logo"
          />
        </div>

        <div className="result-content">
          <div className="result-main">
            <div className="result-title"> {job.title} </div>
            <div className="result-company"> {job.company} </div>
            <div className="result-location">
              {job.location} ·
              <div className="location-tag"> {job.distance} mi</div>
            </div>
          </div>

          <div className="result-tags">
            <span
              className="tag salary"
              style={{
                display: tags.salary ? "inline-block" : "none",
              }}
            >
              {" "}
              {job.salary}{" "}
            </span>
            <span
              className="tag experience"
              style={{
                display: tags.experience ? "inline-block" : "none",
              }}
            >
              {" "}
              {job.experience}{" "}
            </span>
            <span
              className="tag remote"
              style={{
                display: tags.remote ? "inline-block" : "none",
              }}
            >
              {" "}
              {job.remote}{" "}
            </span>
            <span
              className="tag type"
              style={{
                display: tags.type ? "inline-block" : "none",
              }}
            >
              {" "}
              {job.type}{" "}
            </span>
          </div>
          <div className="result-other"></div>
        </div>
        <div className="result-visible">Visi</div>
      </div>
    </div>
  );
}

export default JobResult;
