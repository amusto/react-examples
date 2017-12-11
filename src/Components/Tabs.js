import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import React, { Component } from 'react';

function NavItems(props) {
  const apps = props.apps;
  const navItems = apps.map((app) =>
    <NavItem eventKey={app.id} key={app.id}>
      {app.name}
    </NavItem>
    
  );
  return (
    <Nav bsStyle="pills" stacked>
      {navItems}
    </Nav>
  );
}

function NavTabPane(props) {
  const apps = props.apps;
  const tabPanes = apps.map((app) =>
    <Tab.Pane eventKey={app.id} key={app.id}>
    <div className="text-center">
      <div className="panel-header">{app.name}</div>
      {app.content}
      {app.component}
    </div>  
    </Tab.Pane>    
  );
  return (
    <Tab.Content animation>
      {tabPanes}
    </Tab.Content>
  );
}

class Tabs extends Component {
    render() {
      const _Applications = this.props.Applications;
      const defaultActiveKey = this.props.defaultActiveKey;      

      return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={_Applications[defaultActiveKey].id}>
          <Row className="clearfix">
            <Col sm={4}>
              <NavItems apps={_Applications} />
            </Col>
            <Col sm={8}>
              <NavTabPane apps={_Applications} />
            </Col>
          </Row>
        </Tab.Container>
      );
    }
  }  

export default Tabs;