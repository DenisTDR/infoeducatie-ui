"use strict";

import React from "react";

import { Row, Col, Grid } from "react-bootstrap";
import Header from "./header";

import "./schedule.less";

export default React.createClass({
  displayName: "SchedulePage",

  render() {
    return <div className="schedule">
      <div className="blue-section-wrapper">
        <Grid className="blue-section">
          <Row>
            <Col xs={12}>
              <Header isLoggedIn={this.props.isLoggedIn}
                      current={this.props.current}
                      language={this.props.language}
                      changeLanguage={this.props.changeLanguage}
                      logout={this.props.logout} />
            </Col>
          </Row>
          <Row>
            <Row className="small-spacing" />
            <Col xs={12}>
              <h1>Program InfoEduca&#355;ie </h1>
              <h2>Ediția {this.props.edition.name}</h2>
            </Col>
          </Row>
          <Row className="big-spacing" />
        </Grid>
      </div>
      <Grid className="white-section">
        <Row className="small-spacing" />
        <Row>
          <Col md={9} mdOffset={3}>
             <iframe src="https://docs.google.com/document/d/e/2PACX-1vRRrkfFWKoIkJ_XrGeuXJEExZGbfQrryhLehwAQ-mRfu_MkNds0X3nF0JuXBVx69_a-zcqgO3SGb0XD/pub?embedded=true"></iframe>
          </Col>
        </Row>
      </Grid>
    </div>;
  }
});
