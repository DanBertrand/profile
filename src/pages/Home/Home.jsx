import { useState} from 'react';
  
const Home = () => {

  const [input, setInput] = useState('');
  
return (
<div className='Home'>
  <h2>Home</h2>
  <input type="text" value={input} onChange={e => setInput(e.target.value)} ></input>
  <p>{input}</p>
</div>
)
}
  
export default Home