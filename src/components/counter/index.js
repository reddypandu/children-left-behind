import React from 'react'
import './style.css'

const CounterSection = (props) => {
    return(
        <div className={`wpo-counter-area ${props.countclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                      <div className="wpo-counter-grids">
    <div className="grid flex items-center gap-3">
        <i className="fa-solid fa-children text-4xl text-orange-500"></i>
        <div>
            <h2>
                <span className="odometer" data-count="700">700</span>+
            </h2>
            <p>Children Empowered</p>
        </div>
    </div>

    <div className="grid flex items-center gap-3">
        <i className="fa-solid fa-diagram-project text-4xl text-blue-500"></i>
        <div>
            <h2>
                <span className="odometer" data-count="30">30</span>+
            </h2>
            <p>Projects Completed</p>
        </div>
    </div>

    <div className="grid flex items-center gap-3">
        <i className="fa-solid fa-handshake-angle text-4xl text-green-500"></i>
        <div>
            <h2>
                <span className="odometer" data-count="7">7</span>+
            </h2>
            <p>Trusted Global Sponsors</p>
        </div>
    </div>

    <div className="grid flex items-center gap-3">
        <i className="fa-solid fa-hospital text-4xl text-red-500"></i>
        <div>
            <h2>
                <span className="odometer" data-count="5">5</span>+
            </h2>
            <p>Dedicated Regional Care Centres</p>
        </div>
    </div>
</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterSection;