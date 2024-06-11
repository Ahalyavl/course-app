import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Navbar from './Navbar'


const ViewCourse = () => {
    const [data, changeData] = useState([])
    const fetchdata = () => {
        axios.get("http://localhost:8084/view").then((response) => {
            changeData(response.data)
            console.log(response.data)
        }).catch((error) => {
            alert(error.message)
        })
    }

    useEffect(
        () => { fetchdata() }, []
    )
    return (
        <div>
           <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Venue</th>
                                    <th scope="col">Trainer Name</th>
                                    



                                </tr>
                            </thead>
                            {data.map(
                                (value, index) => {
                                    return <tbody>
                                        <tr>
                                            <th scope="row">{value.title}</th>
                                            <td>{value.description}</td>
                                            <td>{value.date}</td>
                                            <td>{value.duration}</td>
                                            <td>{value.venue}</td>
                                            <td>{value.trainerName}</td>
                                        </tr>

                                    </tbody>
                                }
                            )}

                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewCourse