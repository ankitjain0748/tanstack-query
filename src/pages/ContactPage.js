import React, { useState } from 'react';

function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [validation, setValidation] = useState({
    fullName: true,
    subject: true,
    email: true,
    body: true,
  });

  const validateField = (field, value) => {
    if (field === 'email') {
      return /\S+@\S+\.\S+/.test(value);
    } else {
      return value.length >= 3;
    }
  };

  const handleBlur = (field, value) => {
    setValidation({ ...validation, [field]: validateField(field, value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(validation).every(Boolean)) {
      console.log({ fullName, subject, email, body });
    }
  };

  return (
    <div className='container'>
      <div className='row'>
          <div className='col-md-12 '>
            <form onSubmit={handleSubmit}>
              <div class="form-group form-data">
                <input type="text" class="form-control" value={fullName} id="exampleInputPassword1" placeholder="Name" onChange={(e) => setFullName(e.target.value)} onBlur={() => handleBlur('fullName', fullName)} required />
              </div>
              <div class="form-group form-data">
                <input type="email" value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} onBlur={() => handleBlur('email', email)} required placeholder="Enter email" />
              </div>
              <div class="form-group form-data">
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} onBlur={() => handleBlur('subject', subject)} required class="form-control" id="exampleInputPassword1" placeholder="Subject" />
              </div>
              <div class="form-group form-data">
                <textarea class="form-control" placeholder="text-area"value={body} id="exampleFormControlTextarea1" rows="3" onChange={(e) => setBody(e.target.value)} onBlur={() => handleBlur('body', body)} required ></textarea>
              </div>
              <div className='form-group'>
              <button type="submit" class="btn btn-primary form-control">
                <span id="sumbit">Submit</span>
              </button>

              </div>
            </form>
          </div>
      </div>
    </div>
  );
}

export default ContactPage;
