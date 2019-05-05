import React from 'react';
import './FlagChoices.css';
import StyledButton from './StyledButton'

const FlagChoices = props => {
  let options = props.options || [];
  const {handleSubmit, handleChange} = props;
  let inputs = options.map(opt => (
    <label key={opt.id}>
      <input 
        type="radio"
        value={opt.id}
        checked={opt.checked}
        onChange={handleChange}
        name="flag-choice"
      />
      {opt.name}
    </label>
  ));
  return (
    <form className="flag-form" onSubmit={handleSubmit}>
      {inputs}
      <StyledButton text='GUESS' type='submit'/>
    </form>
  );
}

export default FlagChoices;

