import { useState } from "react"
// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function  Form (props){
    const [formData, setFormData] = useState({
        searchterm: "",
      });

  const handleChange = (event) => {
    
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
   
    event.preventDefault();
   
    
    props.moviesearch(formData.searchterm);
  };


    return (
    <div>
        <form onSubmit={handleSubmit} className="bg-red-500">
            <input
            type="text"
            name="searchterm"
            onChange={handleChange}
            value={formData.searchterm}
            />
                
            
            <input type='submit' value='submit' className="bg-gray-400"/>
        </form>

    </div>
    
    )
  };