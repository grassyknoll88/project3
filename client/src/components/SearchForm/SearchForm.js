import React from "react";
import "./SearchForm.css";
import Select from "react-select";
import "react-select/dist/react-select.css";

const SearchForm = props => {
  console.log(props);
  return (
    <Select
      name="form-field-name"
      value={props.state.selectedOption}
      onChange={props.handleChange}
      // selectValue={props.}
      options={[{ value: "one", label: "One" }, { value: "two", label: "Two" }]}
    />
    // <div className="input-group md-form form-sm form-2 pl-0">
    //   <input
    //     className="form-control my-0 py-1 amber-border"
    //     type="text"
    //     placeholder="Search"
    //     aria-label="Search"
    //   />
    //   <div className="input-group-append">
    //     <span className="input-group-text amber lighten-3" id="basic-text1">
    //       <i className="fa fa-search text-grey" aria-hidden="true" />
    //     </span>
    //   </div>
    // </div>
  );
};

export default SearchForm;
