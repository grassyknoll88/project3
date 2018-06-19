import React from "react";
import {
  Container,
  FormInline,
  Button,
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavbarNav,
  NavItem,
  NavLink,
  Fa,
  Select,
  SelectInput,
  SelectOptions,
  SelectOption
} from "mdbreact";

class SearchPagePro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Choose your option"
    };
    this.optionClick = this.optionClick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.otherDropdownsClose = this.otherDropdownsClose.bind(this);
  }

  optionClick(value) {
    if (value.constructor === Array) {
      value = value.join(", ");
    }
    this.setState({ value: value });
  }

  onClick(e) {
    // check if select is multiple
    if (e.target.dataset.multiple === "true") {
      return;
    }
    if (e.target.classList.contains("form-control")) {
      return;
    }

    if (e.target.classList.contains("select-dropdown")) {
      this.otherDropdownsClose();
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.classList.add("fadeIn");
      }
    } else {
      this.otherDropdownsClose();
    }
  }

  otherDropdownsClose() {
    let dropdowns = document.querySelectorAll(".dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains("fadeIn")) {
        dropdowns[i].classList.remove("fadeIn");
      }
    }
  }

  componentDidMount() {
    document.addEventListener("click", this.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onClick);
  }

  render() {
    return (
      <Container>
        <Select multiple>
          <SelectInput value={this.state.value} />
          <SelectOptions search>
            <SelectOption disabled>Choose your option</SelectOption>
            <SelectOption triggerOptionClick={this.optionClick}>
              Option nr 1
            </SelectOption>
            <SelectOption triggerOptionClick={this.optionClick}>
              Option nr 2
            </SelectOption>
            <SelectOption triggerOptionClick={this.optionClick}>
              Option nr 3
            </SelectOption>
            <SelectOption triggerOptionClick={this.optionClick}>
              Option nr 4
            </SelectOption>
            <SelectOption triggerOptionClick={this.optionClick}>
              Option nr 5
            </SelectOption>
          </SelectOptions>
        </Select>
        <label>Example label</label>
      </Container>
    );
  }
}

export default SearchPagePro;
