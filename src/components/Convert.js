import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Convert = ({text, language}) =>{

    const[translatedText, setTranslatedText] = useState('');
    const[debouncedText, setDebouncedText] = useState(translatedText);

    useEffect(() => {
        const timeoutId = setTimeout(()=> {
            setDebouncedText(text);
        },500);

        return(() => {
            clearTimeout(timeoutId);
        })

    },[text])

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',{}, {
                    params: {
                     //   q: text,
                        q : debouncedText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                });
            
            setTranslatedText(data.data.translations[0].translatedText);
        };

        doTranslation();
    },[language, debouncedText]);     
 //   },[language, text]);

    return (
        <div>
            <div>
                <h1 className='ui header'>{translatedText}</h1>
            </div>
        </div>
    );
}

export default Convert;