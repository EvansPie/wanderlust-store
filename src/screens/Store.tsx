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

                window.scrollTo(0, 0);
            }
        });

        this.init();
    }

    async init() {

    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 320 }}>
                <div style={{
                    marginTop: 4,
                    marginBottom: 4,
                    marginLeft: 6,
                    marginRight: 6,
                    overflow: 'hidden',
                    backgroundColor: 'white',
                    fontFamily: 'Helvetica',
                    fontSize: 11,
                    fontWeight: 300,
                    textAlign: 'justify'
                }}>
                    Wanderlust is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.
                </div>
                <AmazonGrid />
                {/* <WebgainsGrid /> */}
            </div>


        )
    }
}

