import React from "react";
import App from "../App";

export class AccordionClass extends React.Component {

    // initialization
    state = {activeIndex: 0};

    onTitleClick(index) {
        // update state
        this.setState({activeIndex: index});
    }

    renderedItems() {
        return this.props.items.map((item, index) => {
            return (
                <React.Fragment key={item.title}>           
                    <div className='title active' onClick={()=>this.onTitleClick(index)}>
                        <i className='dropdown icon'></i>
                        {item.title}
                    </div>
                    <div className='content active'>
                        <p>{item.content}</p>
                    </div>
                </React.Fragment>
            )
        });
    }

    render() {
        return (
            <div className='ui styled accordion'> {this.renderedItems()} {this.state.activeIndex} </div>
        );
    }
}
