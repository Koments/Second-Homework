import React, { useState, useEffect } from 'react';
let answers = [
    '8',
  'It is certain',
  'It is decidedly so',
  'Without a doubt', 
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'Don\'t count on it', 
  'My reply is no',
  'My sources say no',
  'Most likely',
  'Outlook not so good',
  'Very doubtful'
  ]
export default function MagicBall(){
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState(answers[0])
   
    return(
        <div>
            <div className='questions'>
            <input className='input_question' onChange={e => setQuestion(e.target.value)} type="text" required/>
            <button className='button_question' onClick={() =>{
                if(question == ""){
                
                }else{setAnswer(answers[Math.floor(Math.random() * 20)])}
            }}>Click me!</button>
            </div>
            <div className ='ball'><p>{answer}</p></div>
        </div>
    )
}
