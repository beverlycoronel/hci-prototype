import { Job } from "./models";
import { FaBriefcase, FaRegBuilding } from "react-icons/fa";
import { FaUserGroup, FaListCheck } from "react-icons/fa6";

interface JobResultProps {
  job: Job;
}
function JobResult({ job }: JobResultProps) {
    return (
        <div className="description-container">
            <div className="description-title">
              {" "}
              {job.title}{" "}
            </div>
            <div> {job.company} · {job.location} </div>
            <div> {job.posted} days ago | 77 applicants </div>
            <br></br>
            <div>
              <FaBriefcase /> {job.salary} · {job.remote} · {job.type}
            </div>
            <div>
              {" "}
              <FaRegBuilding /> 10,001+ employees · Software Development
            </div>
            <div>
              {" "}
              <FaUserGroup /> 3 connections work here · {job.alumni} school alumni work
              here{" "}
            </div>
            <div>
              {" "}
              <FaListCheck /> 7 of 10 skills match your profile - you may be a
              good fit{" "}
            </div>
            <br></br>
            <div className="description-buttons">
              <div className="description-apply">Apply</div>
              <div className="description-save">Save</div>
            </div>

            <br></br>

            <div className="description-about"> About the Job</div>
            <div className="description-about-company"> About {job.company}</div>
            <div>
              {job.company1}
              <br></br>
              We’re on a mission to hire the very best and are committed to
              creating exceptional employee experiences where everyone is
              respected and has access to equal opportunity. We realize that new
              ideas can come from everywhere in the organization, and we know
              the next big idea could be yours!
            </div>
            <br></br>
            <div>
              Changing the world through digital experiences is what Adobe’s all
              about. We give everyone—from emerging artists to global
              brands—everything they need to design and deliver exceptional
              digital experiences! We’re passionate about empowering people to
              create beautiful and powerful images, videos, and apps, and
              transform how companies interact with customers across every
              screen.
            </div>
          </div>

    );
    
}

export default JobResult