import React from 'react';
import ToolTip from "./ToolTip";

class LectureCard extends React.Component {

    render () {
        return (
              <div>
                  <div><h2>Lecture Card</h2></div>
                  {
                      this.props.hoverOver === true ? <ToolTip /> : null
                  }

                </div>

        );
    }
}

export default LectureCard;