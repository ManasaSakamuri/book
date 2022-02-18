import React from 'react';
import  ReactDOM  from 'react-dom';
//CSS
import './index.css';
//set up vars


import {data} from './books'
import SpecificBook from './book'
import {greeting} from './testing/testing'

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList/>,document.getElementById('root'));