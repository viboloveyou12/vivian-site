import {Helmet} from 'react-helmet';

const MetaElement = () => (
    <Helmet>
        <meta name="description" content="Vivian Yang is a Front-End Developer who has over 3 years of experience across the video streaming and cloud service industries." />
    
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Vivian Yang" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vivian-yang.uk" />
        <meta property="og:title" content="Vivian Yang" />
        <meta property="og:description" content="Vivian Yang is a Front-End Developer who has over 3 years of experience across the video streaming and cloud service industries." />
        <meta property="og:image" content="https://jiayun-yang-personal-site.s3.eu-west-2.amazonaws.com/image/vivian-site-og.png" />
        
        <meta name="twitter:title" content="Vivian Yang" />
        <meta name="twitter:description" content="Vivian Yang is a Front-End Developer who has over 3 years of experience across the video streaming and cloud service industries." />
        <meta name="twitter:url" content="https://www.vivian-yang.uk" />
        <meta name="twitter:image" content="https://jiayun-yang-personal-site.s3.eu-west-2.amazonaws.com/image/vivian-site-og.png" />
    </Helmet>
)

export default MetaElement;