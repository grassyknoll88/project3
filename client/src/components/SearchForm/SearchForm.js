import React from "react";
import "./SearchForm.css";
import { render } from "react-dom";
import Downshift from "downshift";
import API from "../../utils/API";
import DogCards from "../DogCards/DogCards";

export default class SearchForm extends React.Component {
  state = {
    items: [],
    dogs: [],
    results: []
  };

  componentDidMount() {
    API.getDogs()
      .then(response => {
        this.setState({ dogs: response.data });
        let states = this.state.dogs
          .map(dog => {
            return dog.state;
          })
          .filter((val, ix, arr) => {
            return arr.indexOf(val) === ix;
          })
          .map(state => {
            return { state: state };
          });
        this.setState({ items: states });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSelection(selectedVal) {
    alert(`You selected ${selectedVal.state}`);
    let results = this.state.dogs.filter(dog => {
      return dog.state.toLowerCase() === selectedVal.state.toLowerCase();
    });
    this.setState({ results: results });
  }

  render() {
    return (
      <div>
        <Downshift
          onChange={selection => this.handleSelection(selection)}
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

        {this.state.results.map((results, i) => (
          <DogCards
            id={i}
            pet_name={results.username}
            breed={results.breed}
            city={results.city}
            imgUrl={results.imgUrl}
          />
        ))}
      </div>
    );
  }
}
