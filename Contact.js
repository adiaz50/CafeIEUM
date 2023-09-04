import React, {useEffect, useState, ChangeEvent} from 'react';
import axios from 'axios';


function Contact(){

    const [postData, setPostData] = useState('');
    const [response, setResponse] = useState('');
  
    const handlePost = async () => {
      try {
        const response = await axios.post('/api/send-data', { data: postData });
        setResponse(response.data.message);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };
        

    return (
        <section className="contact" id="contact">
            <div className="heading">
                <img src="images/menu.png" alt="" />
                <h3>Contact</h3>
            </div>
            <div className="row">
              hi
                {/* <form action="https://example.com" method="post">
                <h3>book a table</h3>
                    <input
                        type="name"
                        name="name"
                        value={postData}
                        required="true"
                        className="box"
                        maxLength={50}
                        placeholder="Enter Your Name"
                        onChange={(e) => setPostData(e.target.value)}
                    />
                    <button onClick={handlePost}>Send Data</button>
                    <p>Response: {response}</p>
                </form> */}
            </div>
        </section>
      );
    }
export default Contact;


