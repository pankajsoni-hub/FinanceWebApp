import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    tabLabel: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row-reverse',
        padding: '1em',
        background: '#fff',
        fontWeight: 700,
        cursor: 'pointer',
        color: '#00008b',
        gap: '15px',
    },
    tabContent: {
        maxHeight: '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out',
        opacity: 0,
        padding: '0 .5em',
        border: '1px solid #ccc',
        lineHeight: 1.5,
        fontSize: '16px',
        wordBreak: 'break-word',
        hyphens: 'auto',
    },
    tabContentExpanded: {
        maxHeight: '100vh',
        opacity: 1,
        padding: '.5em',
    },
    arrowIcon: {
        transition: 'transform 0.3s',
    },
    arrowIconExpanded: {
        transform: 'rotate(180deg)',
    },
}));

const ExpandComponent = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const classes = useStyles();

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div>
            <div className={classes.tabLabel} onClick={toggleExpand}>
                <span>Editorial &amp; Advertiser Disclosure</span>
                <span className={`${classes.arrowIcon} ${isExpanded ? classes.arrowIconExpanded : ''}`}>
                    ▼
                </span>
            </div>
            <div className={`${classes.tabContent} ${isExpanded ? classes.tabContentExpanded : ''}`}>
                Finance Digest is a leading online platform for finance and business news, providing insights on banking, finance, technology, investing, trading, insurance, fintech, and more. The platform covers a diverse range of topics, including banking, insurance, investment, wealth management, fintech, and regulatory issues. The website publishes news, press releases, opinion, and advertorials on various financial organizations, products, and services which are commissioned from various Companies, Organizations, PR agencies, Bloggers, etc. These commissioned articles are commercial in nature. This is not to be considered as financial advice and should be considered only for information purposes. It does not reflect the views or opinions of our website and is not to be considered an endorsement or a recommendation. We cannot guarantee the accuracy or applicability of any information provided with respect to your individual or personal circumstances. Please seek professional advice from a qualified professional before making any financial decisions. We link to various third-party websites, affiliate sales networks, and to our advertising partners' websites. When you view or click on certain links available on our articles, our partners may compensate us for displaying the content to you or make a purchase or fill a form. This will not incur any additional charges to you. To make things simpler for you to identify or distinguish advertised or sponsored articles or links, you may consider all articles or links hosted on our site as a commercial article placement. We will not be responsible for any loss you may suffer as a result of any omission or inaccuracy on the website.
            </div>
        </div>
    );
};

export default ExpandComponent;
