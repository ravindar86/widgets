import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Menu from './components/Menu';
import Route from './components/Route';
import { Search } from './components/Search';
import Translate from './components/Translate';


const items = [
    {
        title: "Question 1",
        content: "Some default content 1"
    },{
        title: "Question 2",
        content: "Some default content 2"
    },{
        title: "Question 3",
        content: "Some default content 3"
    }
];

const options = [
    {
        label: 'The Color Green',
        value: 'green'
    },{
        label: 'The Color Red',
        value: 'red'
    },{
        label: 'A shade of Blue',
        value: 'blue'
    }
]

export default () => {
    const[selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Menu />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown options={options} selected={selected} onSelectedChange={setSelected} label="Select a Color" />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}

/*
// Dropdown Widget

const[selected,setSelected]=useState(options[0]);
    const[showDropDown, setShowDropDown]=useState(true);

    return (
         <div >
             <button  onClick={() => setShowDropDown(!showDropDown)}>Toggle DropDown</button>

           {showDropDown ?
            <Dropdown 
                selected={selected} 
                onSelectedChange={setSelected} 
                options={options}>                
            </Dropdown>
            : null }
        </div>
    );
*/