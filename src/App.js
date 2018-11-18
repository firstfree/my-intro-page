/* --------------------------------------------------------
author: Dval
----------------------------------------------------------*/

import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TodayIntro from './components/TodayIntro';
import SettingIntro from './components/SettingIntro';
import OneDayIntro from './components/OneDayIntro';
import BudgetIntro from './components/BudgetIntro';
import './App.scss';

class App extends Component {
    componentDidMount() {
        AOS.init({
            once: true,
            easing: 'linear'
        });
    }

    render() {
        return (
            <div className="App">
                <TodayIntro />
                <SettingIntro />
                <OneDayIntro />
                <BudgetIntro />
            </div>
        );
    }
}

export default App;
