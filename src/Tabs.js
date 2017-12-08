import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import React, { Component } from 'react';

class Tabs extends Component {
    /*constructor(props) {
      super(props);
      //this.state = {isToggleOn: true};
    }*/
  
    render() {
      return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={4}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">
                  Introduction
                </NavItem>
                <NavItem eventKey="second">
                  Tab 2
                </NavItem>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">
                  Introduction to my REACT Application. Click on a tab to review a code sample.
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Tab 2 content
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      );
    }
  }  

export default Tabs;