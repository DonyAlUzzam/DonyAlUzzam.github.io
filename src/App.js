import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Fingerprint2 from 'fingerprintjs2';
import './style/main.scss';

const Menu = React.lazy(() => import('./components/menu/Menu'));
const Header = React.lazy(() => import('./components/header/Header'));
const Content = React.lazy(() => import('./components/content/Content'));
const Quotes = React.lazy(() => import('./components/quotes/Quotes'));
const Timeline = React.lazy(() => import('./components/timeline/Timeline'));
const MyGoal = React.lazy(() => import('./components/mygoal/MyGoal'));
const Footer = React.lazy(() => import('./components/footer/Footer'));

class App extends Component {
  componentDidMount() {
    document.title = 'M. Khairi Usman Portofolio';
    setTimeout(function() {
      Fingerprint2.get(function(components) {
        console.log(components); // an array of components: {key: ..., value: ...}
        var values = components.map(function(component) {
          return component.value;
        });
        var murmur = Fingerprint2.x64hash128(values.join(''), 31);
        console.log(murmur);
      });
    }, 2000);
  }
  render() {
    return (
      <div className="container">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Menu />
          <Header />
          <Content />
          <Quotes />
          <Timeline />
          <MyGoal />
          <Footer />
        </React.Suspense>
      </div>
    );
  }
}

export default App;
