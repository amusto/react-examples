import { Grid, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';

class PageTemplate extends Component {
  
    render() {
      return (

        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>                
                <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>                
            </Row>
        </Grid>

      );
    }
  }  

export default PageTemplate;