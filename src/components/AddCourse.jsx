import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


const AddCourse = () => {
    const [data, setData] = useState({
        
    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8084/add",data).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status == "success") {
                    alert("Successfully Added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                alert(error.message)
              }
        )

    }
    
    return (
        <div>
          <Navbar/>
            <h1><center>Course Details</center></h1>
            
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" className="form-control" name='description' value={data.description} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input type="date" name="date"  className="form-control" value={data.date} onChange={inputHandler} />
                            </div>
                            
                            
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="duration" className="form-label">Duration</label>
                                <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label htmlFor="venue" className="form-label">Venue</label>
                                <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label htmlFor="trainersName" className="form-label">Trainer Name</label>
                                <input type="text" className="form-control" name='trainerName' value={data.trainerName} onChange={inputHandler} />
                            </div>
                           
                            <div className="col col-12 col-sm-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourse