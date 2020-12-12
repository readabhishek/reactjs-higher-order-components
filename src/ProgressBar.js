import React from 'react';
import ToolTip from "./ToolTip";

class Progressbar extends React.Component {

    render () {
        return (
            <div>
                <div><h2>Progress Bar</h2></div>
                {
                    this.props.hoverOver ? <ToolTip /> : <span></span>
                }

            </div>

        );
    }
}

export default Progressbar;