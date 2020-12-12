import React from 'react';
import './App.css';
import higherOrderComponent from "./higherOrderComponent";
import LectureCard from "./LectureCard";
import Progressbar from "./ProgressBar";
import ToolTip from "./ToolTip";


class App extends React.Component {

    render() {
        const LectureCardWithToolTip = higherOrderComponent(LectureCard);
        /*console.log(LectureCardWithToolTip);*/
        const ProgressbarWithToolTip = higherOrderComponent(Progressbar);
        return (
            <div>
                <LectureCardWithToolTip />
                <ProgressbarWithToolTip />
            </div>
        );

    }

}

export default App;
