//rfce
import React, { useEffect, useState } from 'react';

function App() {
     //create a state variable which will contain the back-end data that we get from the backend API 
     const [backendData, setBackendData] = useState([{}]);

     //to fetch backend API
     useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
     }, [])
  return (
    <div>
      {/* display the users */}
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{users}</p>
        ))
      )}
    </div>
  )
}

export default App;
