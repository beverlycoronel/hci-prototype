/// <reference types="node" />
import { useState } from 'react'

import "./App.css";
import JobResult from "./JobResult";
import JobDescription from "./JobDescription";
import TagsDropdown from "./TagsDropdown";

import postings from "./postings.json";
import { Job, TagOptions} from "./models";

function App() {
  const jobs = postings.postings as Job[];
  const [currJob, setCurrJob] = useState(jobs[0]);
  const [selected, setSelected] = useState(0);
  const [tags, setTags] = useState<TagOptions>({salary: true, experience: false, type: false, remote: false, benefits: false, skills: false});
  const handleClick = (index: number, job: Job, ) => () => {
    setCurrJob(job);
    setSelected(index);
  };
  return (
    <>
      <header className="linkedin-top-bar">
        <p> . </p>
      </header>
      <div className="jobs-container">
        <div className="filters-bar">
          <div style={{color: "white"}}>sal</div>
        </div>
        <div className="job-search-container">
          <div className="results-container">
            
            <div className="alert-bar">
              <div className="alert-bar-content">
                <div>software engineer · United States</div>
                <div className="results-number">112 results</div>
              </div>
              <div className="search-dropdown-container">
                <TagsDropdown setTags={setTags}></TagsDropdown>
              </div>
            </div>

            <div className="results-postings">
              {jobs.map((job, index) => (
                <div onClick={handleClick(index, job)}
                style={{
                  backgroundColor: selected == index ? "rgb(220,233,249)" : "rgb(255,255,255)",
                }}>
                <JobResult tags={tags} job={job}></JobResult>
                </div>
              ))}
            </div>
          </div>
            <JobDescription job={currJob}></JobDescription>
        </div>
      </div>
    </>
  );
}

export default App;


