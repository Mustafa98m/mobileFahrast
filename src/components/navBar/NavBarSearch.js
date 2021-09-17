import React from 'react';
import { Form, Button, Container, OverlayTrigger, Popover } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
function NavBarSearch() {
  return (
    <div>

      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>

            <Popover.Body>
              <form noValidate autoComplete="off">
                <Form.Label>Search</Form.Label>
                <Form.Control type="Searh" placeholder="Enter the book you want" />
              </form>
            </Popover.Body>
          </Popover>
        }
      >
        <Container clssName=""><BsSearch></BsSearch></Container>
      </OverlayTrigger>


    </div>
  )
}

export default NavBarSearch
