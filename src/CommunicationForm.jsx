import React from 'react';
import './App.css';


const CommunicationForm = () => {
   
return(
    <div className="Communications">
        <script>
            function DisplayForm (frm) {
              /*if (frm)
              {
                //document.getElementById('contactFormId').style="{display:none}";
                frm.style="{display:none}";
              }
              else
              {
                //document.getElementById('contactFormId').style="{display:block}";
                frm.style="{display:block}";
                
              }*/
              frm.
            }
        </script>
       
      <h1>Please enter your concerns</h1>
      <form method='Post' name="contactFormName" id="contactFormId" >
      <button onClick={"DisplayForm(this.form);"}>Contact US </button> 
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" alt="Name" style={{width:"90%"}}/>
         </label>
      
         <label>
           <p>Address</p>
           <input name="address" alt="address" style={{width:"90%"}}/>
         </label>
       
         <label>
           <p>City</p>
           <input name="city" alt="city" style={{width:"90%"}}/>
         </label>
       
         <label>
           <p>State</p>
           <input name="state" alt="state" style={{width:"90%"}}/>
         </label>
       
         <label>
           <p>Zipcode</p>
           <input name="zipcode" alt="zipcode" style={{width:"90%"}}/>
         </label>
         <label>
           <p>Comment</p>
           <input name="comment" alt="comment" type='text' style={{width:"90%", height:"80px"}}/>
         </label>
       </fieldset>
       <button type="submit">Submit</button>  <button type="button">Cancel</button>
      </form>
    </div>
  );
}
export default CommunicationForm;