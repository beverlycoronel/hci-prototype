import { IoMdArrowDropdown } from "react-icons/io";
import "./dropdowns.css";
import { useState } from "react";
import { TagOptions } from "./models";

interface tagsProps {
  setTags: React.Dispatch<React.SetStateAction<TagOptions>>;
}

function TagsDropdown({setTags} : tagsProps) {
  const [enableCheckbox, setEnableCheckbox] = useState(true);
  const [salaryCheckBox, setSalaryCheckBox] = useState(true);
  const [experienceCheckbox, setExperienceCheckbox] = useState(false);
  const [typeCheckbox, setTypeCheckbox] = useState(false);
  const [remoteCheckbox, setRemoteCheckbox] = useState(false);
  const [benefitsCheckbox, setBenefitsCheckbox] = useState(false);
  const [skillsCheckbox, setSkillsCheckbox] = useState(false);

  // If you want to be able to access this in a parent compenent you will need hooks https://react.dev/learn/reusing-logic-with-custom-hooks
  const onChangeEnableCheckbox = () => {
    setEnableCheckbox(!enableCheckbox);
    if (!enableCheckbox) {
      setTags((prevTags: TagOptions) => ({ ...prevTags, salary: salaryCheckBox, experience: experienceCheckbox, type: typeCheckbox, remote: remoteCheckbox, benefits: benefitsCheckbox, skills: skillsCheckbox }));
    }
    else {
      setTags((prevTags: TagOptions) => ({ ...prevTags, salary: false, experience: false, type: false, remote: false, benefits: false, skills: false }));
    }
  };
  const onChangeSalaryCheckbox = () => {
    setSalaryCheckBox(!salaryCheckBox);
    setTags((prevTags: TagOptions) => ({ ...prevTags, salary: !prevTags.salary }));
  };
  const onChangeExperienceCheckbox = () => {
    setExperienceCheckbox(!experienceCheckbox);
    setTags((prevTags: TagOptions) => ({ ...prevTags, experience: !prevTags.experience }));
  };
  const onChangeTypeCheckbox = () => {
    setTypeCheckbox(!typeCheckbox);
    setTags((prevTags: TagOptions) => ({ ...prevTags, type: !prevTags.type }));
    // setTags(tags);
  };
  const onChangeRemoteCheckbox = () => {
    setRemoteCheckbox(!remoteCheckbox);
    setTags((prevTags: TagOptions) => ({ ...prevTags, remote: !prevTags.remote }));
  };
  const onChangeBenefitsCheckbox = () => {
    setBenefitsCheckbox(!benefitsCheckbox);
    setTags((prevTags: TagOptions) => ({ ...prevTags, benefits: !prevTags.benefits }));
  };
  const onChangeSkillsCheckbox = () => {
    setSkillsCheckbox(!skillsCheckbox);
    setTags((prevTags: TagOptions) => ({ ...prevTags, skills: !prevTags.skills }));
  };
  return (
    <>
      <div className="dropdown">
        <button className="result-button-sort">
          Tags
          <div className="dropdown">
            {" "}
            <IoMdArrowDropdown />
          </div>
        </button>
        <div className="dropdown-content">
          <div className="tags-enabled">
            Show Tags
            <label className="switch">
              <input
                id="enabled-toggle"
                type="checkbox"
                onClick={onChangeEnableCheckbox}
                checked={enableCheckbox}
              ></input>
              <span className="slider round"></span>
            </label>
          </div>
          <label
          id="salary-id"
            className={
              enableCheckbox
                ? "checkbox-container"
                : "checkbox-container-disabled"
            }
          >
            Salary
            <input
              type="checkbox"
              onClick={onChangeSalaryCheckbox}
              checked={salaryCheckBox}
              disabled={!enableCheckbox}
            ></input>
            <span className="checkmark"></span>
          </label>

          <label
            className={
              enableCheckbox
                ? "checkbox-container"
                : "checkbox-container-disabled"
            }
          >
            Experience Level
            <input
              id="experience-id"
              type="checkbox"
              onClick={onChangeExperienceCheckbox}
              checked={experienceCheckbox}
              disabled={!enableCheckbox}
            ></input>
            <span className="checkmark"></span>
          </label>

          <label
            className={
              enableCheckbox
                ? "checkbox-container"
                : "checkbox-container-disabled"
            }
          >
            Remote Policy
            <input
              id="remote-id"
              type="checkbox"
              onClick={onChangeRemoteCheckbox}
              checked={remoteCheckbox}
              disabled={!enableCheckbox}
            ></input>
            <span className="checkmark"></span>
          </label>

          <label
            className={
              enableCheckbox
                ? "checkbox-container"
                : "checkbox-container-disabled"
            }
          >
            Position Type
            <input
              id="type-id"
              type="checkbox"
              onClick={onChangeTypeCheckbox}
              checked={typeCheckbox}
              disabled={!enableCheckbox}
            ></input>
            <span className="checkmark"></span>
          </label>

          <label
            className={
              enableCheckbox
                ? "checkbox-container"
                : "checkbox-container-disabled"
            }
          >
            Benefits
            <input
              id="type-id"
              type="checkbox"
              onClick={onChangeBenefitsCheckbox}
              checked={benefitsCheckbox}
              disabled={!enableCheckbox}
            ></input>
            <span className="checkmark"></span>
          </label>

          <label
            className={
              enableCheckbox
                ? "checkbox-container"
                : "checkbox-container-disabled"
            }
          >
            Skills
            <input
              id="type-id"
              type="checkbox"
              onClick={onChangeSkillsCheckbox}
              checked={skillsCheckbox}
              disabled={!enableCheckbox}
            ></input>
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </>
  );
}

export default TagsDropdown;
