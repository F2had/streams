import React, { Component } from 'react';
import { GoogleLogin, UseGoogleLoginProps } from 'react-google-login';


interface Props extends UseGoogleLoginProps {
  clientId: '';
}

type State = {
  isSignedIn: boolean;
};

class GoogleAuthLogin extends Component<Props, State> {
  state: State = {
    isSignedIn: false,
  };
  clientId =
    '';

  render() {
    return (
      <>
        <GoogleLogin
          clientId={this.clientId}
          onSuccess={(response) => console.log('response :>> ', response)}
          onFailure={(response) => console.log('response :>> ', response)}
          // render={(renderProps) => {
          //   <Button
          //     type="link"
          //     onClick={renderProps.onClick}
          //     disabled={renderProps.disabled}
          //   >
          //     Login
          //   </Button>;
          // }}
        />
      </>
    );
  }
}

export default GoogleAuthLogin;
