import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import EditPlan from './EditPlan';
import Plans from './Plans';
import LoginForm from './LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene initial key="login" component={LoginForm} title={'Login'} />
        </Scene>
        <Scene key="main">
          <Scene key="plans" component={Plans} title="Your Plans" initial />
          <Scene key="edit" component={EditPlan} title="Choose modules" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
