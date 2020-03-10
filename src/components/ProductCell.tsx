import React from 'react';
import { WebgainsProduct } from '../models/Product';
import { Color } from '../resources/styles/Color';

interface Props {
    product: WebgainsProduct;
}

interface State {

}

export default class ProductCell extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.init();
    }

    async init() {

    }

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 0,
                    padding: 0,
                    width: 132,
                    // height: 264,
                    // overflow: 'hidden',
                    backgroundColor: 'white'
                }}
                onClick={e => {
                    //@ts-ignore
                    window.ReactNativeWebView.postMessage(JSON.stringify({ link: this.props.product.url }), "*");
                }}
            >
                <img
                    alt={""}
                    src={this.props.product.imageURL}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 132,
                        height: 132,
                        overflow: 'hidden'
                    }}
                />
                <p
                    style={{
                        marginTop: 4,
                        fontFamily: 'Dosis',
                        fontSize: 20,
                        color: Color.battleshipGray,

                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {this.props.product.productName}
                </p>
                <p
                    className={`line-clamp`}
                    style={{
                        marginTop: -12,
                        fontFamily: 'Dosis',
                        fontSize: 17,
                        color: Color.black,

                        background: 'white',
                        lineHeight: '1.2em',
                        maxHeight: '3.6em',
                        overflow: 'hidden',
                        // textOverflow: 'ellipsis',
                        wordBreak: 'break-word',
                        // textAlign: 'justify'
                    }}
                >
                    {this.props.product.description}
                </p>
                {/* </div> */}
            </div >
        );
    }
}
