import React from 'react';
// import '../../style/home/statistics';

function StatComp(params) {
    return (
        <section id="statistics">
            <h1>Herfa in Numbers</h1>
            <script src="./statistics.js"></script>
            <div className="wrapper">
                <div className="counter col_fourth">
                    <p style={{fontSize:"larger"}} className="count-text ">+150</p><br/>
                    <i className="fa fa-home fa-2x"></i>
                    <h2 className="timer count-title count-number" data-to="300" data-speed="1500"></h2>
                    <p style={{fontSize:"larger"}} className="count-text ">Homemade Products</p>
                </div>

                <div className="counter col_fourth">
                    <p style={{fontSize:"larger"}} className="count-text ">+300</p><br/>
                    <i className="fa fa-users fa-2x"></i>
                    <h2 className="timer count-title count-number" data-to="1700" data-speed="1500"></h2>
                    <p style={{fontSize:"larger"}}  className="count-text ">Users</p>
                </div>

                <div className="counter col_fourth">
                    <p style={{fontSize:"larger"}} className="count-text ">+50</p><br/>
                    <i className="fas fa-handshake fa-2x"></i>
                    <h2 className="timer count-title count-number" data-to="11900" data-speed="1500"></h2>
                    <p style={{fontSize:"larger"}} className="count-text ">Successful Deals</p>
                </div>

                <div className="counter col_fourth end">
                    <p style={{fontSize:"larger"}} className="count-text ">+100</p><br/>
                    <i className="fas fa-chart-line fa-2x"></i>
                    <h2 className="timer count-title count-number" data-to="157" data-speed="1500"></h2>
                    <p style={{fontSize:"larger"}} className="count-text ">Increasing Income</p>
                </div>
            </div>
        </section>
    )
}

export default StatComp;