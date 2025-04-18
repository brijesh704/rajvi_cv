import React from 'react'

function Education() {
  return (
    <section className="education" id="education">
    <h1 className="heading">My <span>Education</span></h1>
    <div className="box-container">

        <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2022</span>
            <h3>S.S.C. Passout</h3>
            <p>82.57%</p>
            <p></p>
        </div>

        <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2024</span>
            <h3>H.S.C. Passout</h3>
            <p>89.93%</p>
            <p></p>
        </div>

        <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2025</span>
            <h3>B.B.A running</h3>
            <p></p>
        </div>

    </div>
</section>
  )
}

export default Education