import { useState } from 'react';

const useForm = (initialValues, callback) => {

  const [inputs, setInputs] = useState(initialValues);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleInputChange = (event) => {
    event.persist();
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value; 
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: value,
    }));
  };

  const reset=()=>{
    setInputs(initialValues)
  }

  return {
    handleSubmit,
    handleInputChange,
    reset,
    inputs
  };
};
export default useForm;

