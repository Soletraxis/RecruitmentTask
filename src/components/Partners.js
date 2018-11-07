import React, {Component} from 'react';
import { Grid , Image} from 'react-bootstrap';

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
                    <h2>
                        Tu narazie nic nie ma, ale już niedługo pojawią się informacje o naszych partnerach :)
                    </h2>
                    <Image src={require('../img/love.jpg')} className="love"/>

                    {/*

                    <h3>Sponsor Główny</h3>
                  {MainSponsorData.map((sponsor) =>
                    <Sponsor
                      imageRef={sponsor.imageRef}
                      link={sponsor.link}
                      mainSm={sponsor.mainSm}
                      subSm={sponsor.subSm}
                      xs={sponsor.xs}
                      description={sponsor.description}
                    />)}
                    <h3>Sponsorzy</h3>
                  {SponsorsData.map((sponsor) =>
                      <Sponsor
                        imageRef={sponsor.imageRef}
                        link={sponsor.link}
                        mainSm={sponsor.mainSm}
                        subSm={sponsor.subSm}
                        xs={sponsor.xs}
                        description={sponsor.description}
                      />
                  )}

                  */}

                </Grid>
            </ContentDiv>
        );
    }
}

export default Partners;
