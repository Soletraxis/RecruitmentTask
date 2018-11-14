import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';

import "./Partners.css"
import SponsorsData from '../Constants/SponsorsData'
import Sponsor from '../CustomComponents/Sponsor'
import MainSponsorData from '../Constants/MainSponsorData'
import ContentDiv from '../CustomComponents/ContentDiv'




class Partners extends Component {
    render() {
        return (
            <ContentDiv className="partners">
                <Grid>
                  <h2>Sponsor Główny</h2>
                  {MainSponsorData.map((sponsor) =>
                    <Sponsor
                        title={sponsor.title}
                      imageRef={sponsor.imageRef}
                      link={sponsor.link}
                      linkFB={sponsor.linkFB}
                      linkJob={sponsor.linkJob}
                      mainSm={sponsor.mainSm}
                      subSm={sponsor.subSm}
                      xs={sponsor.xs}
                      description1={sponsor.description1}
                      description2={sponsor.description2}
                    />)}
                    {/*
                    <h3>Sponsorzy</h3>
                  {SponsorsData.map((sponsor) =>
                      <Sponsor
                        imageRef={sponsor.imageRef}
                        link={sponsor.link}
                        mainSm={sponsor.mainSm}
                        subSm={sponsor.subSm}
                        xs={sponsor.xs}
                        description1={sponsor.description1}
                      />
                  )}*/}


                </Grid>
            </ContentDiv>
        );
    }
}

export default Partners;
