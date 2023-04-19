import React, { useState } from 'react';


export const Comment = () => {

  return (
    <div>
   <div className="comment-container1">
      {/* <h1 className="comment-header">Welcome back!</h1> */}
      <form className="comment-form1">
        <label className="comment-label1">Name:</label>
        <input className="comment-input1" />
        <br />
        <label className="comment-label1">Email:</label>
        <input className="comment-input1" />
        <br />
        <br />
        <label className="comment-label1">Comments:</label>
        <input className="comment-input1" />
        <br />
        <button className="comment-button1">Submit</button>
      </form>
    </div>

    </div>
  )
}







// type ContactFormProps = {
//   onSubmit: (name: string, email: string, phone: string, comments: string) => void;
// };

// export const ContactForm = ({ onSubmit }: ContactFormProps) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [comments, setComments] = useState('');

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     onSubmit(name, email, phone, comments);
//   }

//   return (
//     <form className="contact-form" onSubmit={handleSubmit}>
//       <label className="contact-label">
//         Name:
//         <input className="contact-input" type="text" value={name} onChange={(event) => setName(event.target.value)} />
//       </label>
//       <label className="contact-label">
//         Email:
//         <input className="contact-input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//       </label>
//       <label className="contact-label">
//         Phone Number:
//         <input className="contact-input" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
//       </label>
//       <label className="contact-label">
//         Comments:
//         <textarea className="contact-textarea" value={comments} onChange={(event) => setComments(event.target.value)} />
//       </label>
//       <button className="contact-button" type="submit">Submit</button>
//     </form>
//   );
// };
