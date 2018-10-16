import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticlesJS extends Component{

    render(){
        return (
            <Particles
                params={{
                    number: {
                        value: 500,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 50,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        polygon: {
                            nb_sides: 7
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            }
                        }
                    },
                    "retina_detect": true
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,

                }}
            />
        );
    };

}
export default ParticlesJS