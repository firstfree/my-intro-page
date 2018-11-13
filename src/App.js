import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';
import Donut from './components/Donut';
import HalfDonut, { halfDonutType, aosType } from './components/HalfDonut';

class App extends Component {
    componentDidMount() {
        AOS.init({
            once: true,
            easing: 'linear'
        });

        // document.addEventListener('aos:in:graph-2', ({ detail }) => {
        // console.log('animated in', detail);
        // });
    }

    render() {
        return (
            <div className="App">
                <Donut />
                <HalfDonut type={halfDonutType.HALF_DONUT_1} aos={{type: aosType.ROTATE}} />
                <HalfDonut type={halfDonutType.HALF_DONUT_0} aos={{type: aosType.ROTATE_OUT_BACK}} />
            </div>
        );
    }
}

export default App;
