import { ReactComponent as GithubLogo } from './images/github.svg'
import {ReactComponent as LinkedInLogo} from './images/linkedin.svg'

const WebsiteCredits = () => {
    const githubUrl = 'https://github.com/andrewkay6';
    const linkedInUrl = 'https://www.linkedin.com/in/andrew-kay-655344211/';
    const handleGithubClick = () => {
        openInNewTab(githubUrl);
    };
    const handleLinkedInClick = () => {
        openInNewTab(linkedInUrl);
    };
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }
    return (
        <div className="creditSection" >
            <div>
                Website made by Andrew Kay&nbsp;
                <GithubLogo
                    className="clickableSVG" 
                    onClick={() => {handleGithubClick()}} 
                />
                <LinkedInLogo
                    className="clickableSVG"
                    onClick={() => {handleLinkedInClick()}}/>
            </div>
            
        
        </div>
    );
}

export default WebsiteCredits;