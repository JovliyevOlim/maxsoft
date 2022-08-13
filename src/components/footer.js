import React from 'react';
import './footer.css'
import {GrFacebookOption,GrTwitter,GrGithub,GrDribbble} from 'react-icons/gr'
function Footer(props) {
    return (
        <div className={'footer'}>
            <div className={'footer-text'}><p>2021 Themesberg, LLC All rigths reserved </p></div>
            <div className={'footer-icons'}>
                <GrFacebookOption/>
                <GrTwitter/>
                <GrGithub/>
                <GrDribbble/>
            </div>
        </div>
    );
}

export default Footer;
