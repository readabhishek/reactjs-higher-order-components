import React from 'react'

function higherOrderComponent(Component) {

    class hoverOverExtension extends React.Component {

        constructor(props) {
            super(props);
            this.state = {hoverOver: false};
        }

        handleMouseOver = (e) => {
            this.setState(
                {
                    hoverOver: true
                }
            )
            /*console.log(e);*/
        }

        handleMouseOut = () => {
            this.setState(
                {
                    hoverOver: false
                }
            )
        }

        render() {
            return (
                <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.handleMouseOver}>
                    <Component hoverOver={this.state.hoverOver}/>
                </div>

            );
        }
    }

    return hoverOverExtension;
}

export default higherOrderComponent;