import React from 'react';
import WebgainsGrid from '../components/WebgainsGrid';
import AmazonGrid from '../components/AmazonGrid';
// import AmazonGrid from '../components/AmazonGrid';

interface Props {

}

interface State {

}

export default class Store extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
        };
    }

    // <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wanderlust0f-21&language=en_GB&marketplace=amazon&region=GB&placement=B07D23HC9P&asins=B07D23HC9P&linkId=5a62acacea8dcbeee2c7bfdc5d3f6d0c&show_border=true&link_opens_in_new_window=true"></iframe>

    componentDidMount() {
        this.init();
    }

    async init() {

    }

    render() {
        return (
            <AmazonGrid />
            // <WebgainsGrid />
        )
    }
}

