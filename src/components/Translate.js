import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';


const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },{
        label: 'Arabic',
        value: 'ar'
    },{
        label: 'Hindi',
        value: 'hi'
    },{
        label: 'Tamil',
        value: 'ta'
    }
];

const Translate = () => {

    const[language, setLanguage] = useState(options[0]);
    const[text, setText] = useState('');

    return (
        <div>
            <div className='ui form'>               
                <div className='field'>
                    <label className='label'>Enter Text</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)}></input>
                </div>
            </div>
           
            <Dropdown label="Select a Language" options={options} selected={language} onSelectedChange={setLanguage}></Dropdown>

            <br></br>

            <div className='ui form'>     
                <div className="field">
                    <label className='label'>Output</label>
                    <Convert language={language} text={text} />
                </div>
            </div>
        </div>
    );
}

export default Translate;