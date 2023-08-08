import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import axios from "axios";

function table() {
    const [values, setValues] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1027/getinquiry")
        .then(data => setValues(data.data));
    },[])
    return (
        <>
        <h1>Customer Product Request</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Type</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {values.map(item => (
                        <tr>
                            <td>{item.productType}</td>
                            <td>{item.name}</td>
                            <td>{item.author}</td>
                            <td>{item.genre}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Link to={"/homepage"}> <input type="button" value={"Back"}/></Link>
        </>
    );
}

export default table;