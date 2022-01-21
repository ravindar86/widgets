import React, { useState } from 'react';
import reactDom from 'react-dom';

const Accordion = ({items}) => {
    // initialization
    const[activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        console.log("Title Clicked", index);
        // update state
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {

        const active = activeIndex === index ? 'active' : '';

        return <React.Fragment key={item.title}>
           
            <div className={`title ${active}`} onClick={()=>onTitleClick(index)}>
                <i className='dropdown icon'></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        
    });

    return <div className='ui styled accordion'> {renderedItems}  {activeIndex}</div>;
}

export default Accordion;