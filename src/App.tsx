import React from 'react';
//@ts-ignore
import WebFont from 'webfontloader';

import {
  Route,
  BrowserRouter,
  Switch
  //@ts-ignore
} from "react-router-dom";
import './App.css';

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/database";

import Store from './screens/Store'

WebFont.load({
  google: {
    families: ['Dosis']
  }
});

interface Props {

}

interface State {

}

export default class App extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);

    var firebaseConfig = {
      apiKey: "AIzaSyBJJswiTLlW77z-Z2V4P1vOnzsvw7GkPrs",
      databaseURL: "https://wanderlust-a7a7.firebaseio.com",
      projectId: "wanderlust-a7a7",
      appId: "1:1001948995554:web:c7a71cc9d27703c2e1e3bb",
      measurementId: "G-7EGCY4RWZ9"
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <BrowserRouter>
        <Switch className="content">
          <Route exact path="/store" component={Store} />
          <Route path="/" component={Store} />
        </Switch>
      </BrowserRouter>
    );
  }
}
