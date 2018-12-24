import React from 'react';

const FilterContext = React.createContext();

export class FilterProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all'
    };
  }

  onFilterChange = (e) => {
    this.setState({filter: e.target.value});
  }

  render() {
    const { children } = this.props;

    return (
      <FilterContext.Provider
        value={{
          filter: this.state.filter,
          onFilterChange: this.onFilterChange,
        }}
      >      
        {children}
      </FilterContext.Provider>
    );
  }
}

export const withFilter = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <FilterContext.Consumer>
          {value => 
            <WrappedComponent
              {...this.props}
              {...value}  
            />
          }
        </FilterContext.Consumer>
      );
    }
  }
};