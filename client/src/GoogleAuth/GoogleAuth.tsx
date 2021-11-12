import React, { Component } from 'react';
import GoogleAuthLogin from './GoogleLogin';

import { Button } from 'antd';

interface Props  {

}

type State = {
  isSignedIn: boolean;
};

class GoogleAuth extends Component<Props, State> {
  state: State = {
    isSignedIn: false
  };

  render() {
    return (
      <>
      </>
    );
  }
}

export default GoogleAuth;
