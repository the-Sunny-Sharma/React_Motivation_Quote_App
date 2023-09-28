import './Mot.css';
import { useState } from 'react';
import axios from 'axios'; //npm install axios

function Mot(){

    const [ quote, setQuote ] = useState('');
    const [ author, setAuthor ] = useState('');

    const quotable = (event) => {
        event.preventDefault();
        let url = "http://api.quotable.io/random";
        axios.get(url)
        .then(res => {
            setQuote(res.data.content);
            setAuthor(res.data.author);
        })
        .catch(err => {
            alert(`Sorry, we couldn't fetch a quote right now. Please try again later. Error: ${err}`);
        });
    }

    const goPrint = (event) => {
        event.preventDefault();
        window.print();
    }

    return(
        <>
            <h1 className="header textHead">Motivational Quotes Generator</h1>
            <p className="header textp">A project made by Kamal Sir and Sunny Sharma.</p>
            <button onClick={ quotable } className = "btn">Click Me!</button>
            <div className='container quote'>
                <p className='quote'>{ quote }</p>
                <p className='author'>-{ author }</p>
            </div>
            <button onClick={goPrint} className='btn printBtn'>Print</button>
        </>
    );
}

export default Mot;