import React from 'react';
import useForm from './useForm';

// from the folder formShit
// from the folder formShit
function App() {
  const [value, handleChange, handleSubmit, isSubmit, storeValue] = useForm({name: "", password: ""});
  return (
    <div>
      <p>Hello from my shit</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            name='name'
            type='text'
            value={value.name}
            placeholder='User Name'
            onChange={handleChange}
          />
          <input 
            name='password'
            type='password'
            value={value.password}
            placeholder='Password'
            onChange={handleChange}
          />
          <input type='submit' value="Submit"/>
        </form>
        {isSubmit && <p>{storeValue.name} - {storeValue.password}</p>}
      </div>
    </div>
  );
}

export default App;
