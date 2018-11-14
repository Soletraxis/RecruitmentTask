import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './Sponsor.css'


export default class Sponsor extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    imageRef: PropTypes.string,
    xs: PropTypes.number,
    mainSm: PropTypes.number,
    subSm: PropTypes.number,
    link: PropTypes.string,
    linkFB: PropTypes.string,
    linkJob: PropTypes.string,
    description1: PropTypes.string,
    description2: PropTypes.string
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
          <h3>{this.props.title}</h3>
          <p>{this.props.description1}</p>
          <p>{this.props.description2}</p>
            <i className="fab fa-facebook-square fa-lg"></i> <a href={this.props.linkFB} className="partnerLink">{this.props.linkFB.substring(8)}</a><br/>
          <i className="fa fa-globe fa-lg" aria-hidden="true"></i> <a href={this.props.link} className="partnerLink">{this.props.link.substring(8)}</a><br/>
          <i className="fa fa-users fa-lg" aria-hidden="true"></i> <a href={this.props.linkJob} className="partnerLink">{this.props.linkJob.substring(8)}</a>
        </Col>
        </div>
      </Row>
    )
  }
}
