import Footer from '../components/Footer'
import React from 'react'

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  marginBottom: 50
}



const ContentDiv = ({className, children}) => (
  <div className={className} style={styles.fill}>
    <div style={styles.content}>{children}</div>
    <Footer/>
  </div>
)

export default ContentDiv;
