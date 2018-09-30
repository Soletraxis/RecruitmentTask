import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';

import "./Partners.css"
import SponsorsData from '../Constants/SponsorsData'
import Sponsor from '../CustomComponents/Sponsor'
import MainSponsorData from '../Constants/MainSponsorData'




class Partners extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <h2>
                        Ta strona jest tylko podglądowa, będziemy ją na bieżąco budować w trakcie podpisywania umów
                    </h2>
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
                </Grid>
            </div>
        );
    }
}

export default Partners;
