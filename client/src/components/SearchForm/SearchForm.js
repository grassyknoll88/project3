import React from "react";
import "./SearchForm.css";
import { render } from "react-dom";
import Downshift from "downshift";
import API from "../../utils/API";

export default class SearchForm extends React.Component {
  state = {
    // items: [
    //   // { value: "apple" },
    //   // { value: "pear" },
    //   // { value: "orange" },
    //   // { value: "grape" },
    //   // { value: "banana" }
    // ],
    items: []
  };
  // constructor() {
  //   super();
  //   this.state.items = [
  //     { value: "apple" },
  //     { value: "pear" },
  //     { value: "orange" },
  //     { value: "grape" },
  //     { value: "banana" }
  //   ];
  // }

  componentDidMount() {
    API.getDogs()
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Downshift
        onChange={selection => alert(`You selected ${selection.state}`)}
        itemToString={item => (item ? item.state : "")}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem
        }) => (
          <div>
            <label {...getLabelProps()}>Enter a state</label>
            <input {...getInputProps()} />
            <ul {...getMenuProps()}>
              {isOpen
                ? this.state.items
                    .filter(
                      item => !inputValue || item.state.includes(inputValue)
                    )
                    .map((item, index) => (
                      <li
                        {...getItemProps({
                          key: item.state,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index ? "red" : "white",
                            fontWeight:
                              selectedItem === item ? "bold" : "normal"
                          }
                        })}
                      >
                        {item.state}
                      </li>
                    ))
                : null}
            </ul>
          </div>
        )}
      </Downshift>
    );
  }
}
