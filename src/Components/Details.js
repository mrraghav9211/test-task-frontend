import React, { useState, useEffect } from "react";

const Details = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await fetch("https://test-task-backend-production.up.railway.app/api/user/get");
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Govt ID</th>
            <th>Name</th>
            <th>Guardian Details</th>
            <th>Age/Sex</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((val) => (
              <tr>
                <td>{val.id}</td>
                <td>{val.fullName}</td>
                <td>{val.guardianDetails}</td>
                <td>
                  {val.dob}/{val.sex}
                </td>
                <td>{val.mobile}</td>
                <td>{val.address}</td>
                <td>{val.nationality}</td>
              </tr>
            ))
          ) : (
            <p></p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
