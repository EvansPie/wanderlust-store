import React from 'react';
import * as firebase from "firebase/app";
import { WebgainsProduct } from '../models/Product';
import ProductCell from './ProductCell';
import ReactDOM from 'react-dom';

const lineClamp = require('line-clamp')

interface Props {

}

interface State {
    products: WebgainsProduct[];
}

export default class WebgainsGrid extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            products: []
        };
    }

    // <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=wanderlust0f-21&language=en_GB&marketplace=amazon&region=GB&placement=B07D23HC9P&asins=B07D23HC9P&linkId=5a62acacea8dcbeee2c7bfdc5d3f6d0c&show_border=true&link_opens_in_new_window=true"></iframe>

    componentDidMount() {

        // document.addEventListener('message', function (event) {
        //     console.log(`Event: ${JSON.stringify(event)}`);
        // })

        this.init();
        // document.addEventListener("message", function (event) {
        //     console.log(`Doc`);
        // });

    }

    async init() {
        try {
            const snap = await firebase.database().ref('webgains/hotOctopuss').once('value');
            const productsJSON = await snap.val();
            const products = this.parseProducts(productsJSON);
            await this.setState({ products: products });

            const element = document.querySelector(`.line-clamp`);
            // console.log(`ele:  ${JSON.stringify(element)}`);
            lineClamp(element, 3);

            //@ts-ignore
            const elements = ReactDOM.findDOMNode(this).getElementsByClassName('line-clamp');
            for (const ele of elements) {
                lineClamp(ele, 2);
            }
        } catch (error) {
            console.error(error);
        }
    }

    parseProducts(json: any): WebgainsProduct[] {
        const products: WebgainsProduct[] = [];
        for (const id in json) {
            const product = new WebgainsProduct(id, json[id]);
            products.push(product);
        }
        return products;
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
        var productsChunked: (WebgainsProduct[])[] = [];
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
                                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 4, marginBottom: 4, backgroundColor: 'white' }}
                            >
                                {
                                    twoProductsArray.map((product, columnIndex) => {
                                        return (
                                            <div
                                                key={`${rowIndex}_${columnIndex}`}
                                            >
                                                <ProductCell
                                                    product={product}
                                                />
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

