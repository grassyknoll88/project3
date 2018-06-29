import React, { Component } from "react";
import Container from "../components/Container";
import DogCards from "../components/DogCards/DogCards";
import SearchForm from "../components/SearchForm/SearchForm";
import Select from "react-select";
class SearchDash extends Component {
  state = {
    test1: "One",
    test2: "Two",
    selectedOption: ""
  };

  componentDidMount() {}

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }
  };

  handleSelect = value => {
    console.log(value);
  };

  render() {
    return (
      <Container>
        {/* <SearchForm
          state={this.state}
          handleChange={this.handleChange}
          handleSelect={this.handleSelect}
        /> */}
        <Select
          name="form-field-name"
          value={this.state.selectedOption}
          onChange={this.handleChange}
          // selectValue={props.}
          options={[
            { value: "one", label: "One" },
            { value: "two", label: "Two" }
          ]}
        />
        <DogCards dogs={this.state.dogs} />
      </Container>
    );
  }
}

export default SearchDash;
