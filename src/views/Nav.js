import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      curren_hot_price: 'CENA'
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  dropdownHandler= (event) =>{
      let current_btn = event.currentTarget
      let current_string = current_btn.innerHTML
      if (current_btn.id === 'reset') {
          current_string = 'CENA';
      }
      this.setState({
        curren_hot_price: current_string,
      });
      this.props.filterByModel(current_btn.getAttribute('price_type'), 'hot_price');
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="cst_nav sticky-top">
          <NavbarBrand href="/" className="brand-title">Gorące oferty</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavbarBrand className="nav_item_title">Sortuj:</NavbarBrand>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="cst_dropdown">
                <DropdownToggle nav caret>
                  {
                      this.state.curren_hot_price
                  }
                </DropdownToggle>
                <DropdownMenu right className="cst_dropdown_wrapper">
                  <DropdownItem price_type="asc" onClick={e => this.dropdownHandler(e)}>
                    Rosnąco
                  </DropdownItem>
                  <DropdownItem price_type="desc" onClick={e => this.dropdownHandler(e)}>
                    Malejąco
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id="reset" price_type="" onClick={e => this.dropdownHandler(e)}>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
