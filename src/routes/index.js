import { Switch, Redirect, Route } from 'react-router';
import Analytics from './Dashboards/Analytics';

export const RoutedContent = () => {
  return (
    <Switch>
      <Redirect from='/' to='/dashboards/projects' exact />
      <Route path='/dashboards/analytics' exact component={Analytics} />
    </Switch>
  );
};
