import React from 'react';
import './PlaceForm.css';
import { useForm } from '../../shared/hooks/form-hook';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/Validators';



const NewPlace = () => {
  
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
    },
      description: {
        value: '',
        isValid: false
    },
      address: {
        value: '',
        isValid: false
    }
  },
   false
   );


  const placeSubmitHandler = event => {
    event.preventDefault()
    console.log(formState.inputs); 
  }   

     return (
       <form className="place-form" onSubmit={placeSubmitHandler}>
          <Input 
            id="title"
            element="input" 
            type="text" 
            label="Title" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="please enter a valid title."
            onInput={inputHandler}
          />
          <Input 
            id="description"
            element="textarea"  
            label="Description" 
            validators={[VALIDATOR_MINLENGTH(5)]} 
            errorText="please enter a valid description (at least 5 characters)."
            onInput={inputHandler}
          />
          <Input 
            id="address"
            element="input" 
            type="text" 
            label="Address" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="please enter a valid address."
            onInput={inputHandler}
          />
          {/* disabled={!formState.isValid} */}
          <Button type="submit" > 
            ADD PLACE
          </Button>
       </form>
     );
}

export default NewPlace
