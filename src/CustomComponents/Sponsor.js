import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './Sponsor.css'


export default class Sponsor extends React.Component {
  static propTypes = {
    imageRef: PropTypes.string,
    xs: PropTypes.number,
    mainSm: PropTypes.number,
    subSm: PropTypes.number,
    link: PropTypes.string,
    description: PropTypes.string
  }

  render() {
    return (
      <Row>
        <div className='row-eq-height'>
        <Col xs={this.props.xs} sm={this.props.mainSm}>
          <div className='qwe'>
            <a href={this.props.link} className='simg'>
              <Image src={this.props.imageRef} responsive/>
            </a>
          </div>
        </Col>
        <Col xs={this.props.xs} sm={this.props.subSm} className="Sdescription">
          <p>{this.props.description}</p>
          <i className="fa fa-globe" aria-hidden="true"></i> <a href={this.props.link} className="partnerLink">{this.props.link.substring(8)}</a>
        </Col>
        </div>
      </Row>
    )
  }
}
