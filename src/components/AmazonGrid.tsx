import React from 'react';
//@ts-ignore
import ReactHtmlParser from 'react-html-parser';
import * as firebase from "firebase/app";

interface Props {

}

interface State {
    products: any[]
}

export default class AmazonGrid extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            products: []
        };
    }

    test1 = {
        iframe: '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wanderlust0f-21&language=en_GB&marketplace=amazon&region=GB&placement=B07BWJKW15&asins=B07BWJKW15&linkId=84f4777d738119048c963f27d4a49384&show_border=true&link_opens_in_new_window=true&internal=1"></iframe>',
        url: 'https://amzn.to/33205t8'
    }

    test2 = {
        iframe: '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wanderlust0f-21&language=en_GB&marketplace=amazon&region=GB&placement=B07BWJKW15&asins=B07BWJKW15&linkId=84f4777d738119048c963f27d4a49384&show_border=true&link_opens_in_new_window=true"></iframe>',
        url: 'https://amzn.to/33205t8'
    }

    test3 = {
        iframe: '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wanderlust0f-21&language=en_GB&marketplace=amazon&region=GB&placement=B07BWJKW15&asins=B07BWJKW15&linkId=84f4777d738119048c963f27d4a49384&show_border=true&link_opens_in_new_window=true"></iframe>',
        url: 'https://amzn.to/33205t8'
    }

    componentDidMount() {
        this.init();
        // this.setState({
        //     products: [this.test1, this.test2, this.test3]
        // })
    }

    async init() {
        try {
            const snap = await firebase.database().ref('amazon').once('value');
            const productsJSON = await snap.val();
            const products: any[] = [];

            for (const id in productsJSON) {
                const productJSON = productsJSON[id];
                products.push(productJSON);
            }

            await this.setState({ products: products });

        } catch (error) {
            console.error(error);
        }
    }

    chunkArray(array: any[], chunkSize: number): (any[])[] {
        var index = 0;
        var arrayLength = array.length;
        var tempArray = [];

        var chunk: any[];
        for (index = 0; index < arrayLength; index += chunkSize) {
            chunk = array.slice(index, index + chunkSize);
            tempArray.push(chunk);
        }

        return tempArray;
    }

    render() {
        var productsChunked: (string[])[] = [];
        if (this.state.products) {
            productsChunked = this.chunkArray(this.state.products, 2);
        }

        return (
            <div style={{ width: 320, margin: 0, padding: 0, overflow: 'hidden', backgroundColor: 'white' }}>
                {
                    productsChunked.map((twoProductsArray, rowIndex) => {
                        return (
                            <div
                                key={`row_${rowIndex}`}
                                className={'products-row'}
                                style={{ display: 'flex', flexDirection: 'row', height: 240, marginTop: 10, marginBottom: 10, backgroundColor: 'white' }}
                            >
                                {
                                    twoProductsArray.map((product, columnIndex) => {
                                        console.log(`product: ${JSON.stringify(product)}`);
                                        return (
                                            <div
                                                key={`${rowIndex}.${columnIndex}`}
                                                className="Container"
                                                style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
                                                onClick={e => {
                                                    //@ts-ignore
                                                    window.ReactNativeWebView.postMessage(JSON.stringify({ link: product.url }), "*");
                                                }}
                                            >
                                                <div
                                                    style={{ width: 120, height: 240, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
                                                >
                                                    {
                                                        //@ts-ignore
                                                        ReactHtmlParser(product.iframe)
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

