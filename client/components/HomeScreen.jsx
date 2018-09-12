import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap'

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">TigersBack</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href='http://localhost:3000/#/addcourse'>Add Your Course</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.pgatour.com/">PGA TOUR</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  TIPS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Driving
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="https://www.youtube.com/watch?v=DpRmF__A33U">Chipping</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Putting
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
