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

    componentDidMount() {
        window.addEventListener('message', function (event) {
            // alert('message received: ' + JSON.stringify(event.data));
            if (event.data.deviceWidth) {
                const zoom = event.data.deviceWidth / 320;

                const meta = document.createElement('meta');
                meta.setAttribute('content', `width=width, initial-scale=${zoom}, maximum-scale=${zoom}`);
                meta.setAttribute('name', 'viewport');
                document.getElementsByTagName('head')[0].appendChild(meta);
            }
        });

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

