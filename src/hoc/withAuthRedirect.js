import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForNavigate = (state) => ({
  isAuth: state.auth.isAuth,
});

export default function withAuthRedirect(Component) {
  class NavigateComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to="/login" />;

      return <Component {...this.props} />;
    }
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForNavigate)(
    NavigateComponent
  );

  return ConnectedAuthRedirectComponent;
}
