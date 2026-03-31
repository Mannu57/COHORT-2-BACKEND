import React from 'react'

const FormGroup = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}></label>
      <input
        value={value}
        onChange={onChange}
        type={label}
        id={label}
        name={label}
        placeholder={label}
        required
      />
    </div>
  );
}

export default FormGroup