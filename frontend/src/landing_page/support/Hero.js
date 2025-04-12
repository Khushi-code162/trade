import React from 'react';
function Hero(){
    return(
    <section className='container-fluid' id="supportHero">
            <div className='p-3 ' id="supportWrapper">
                <h3>Support Portal</h3>
                <a href="" style={{ color: "white", textDecoration: "none" }}>Track Tickets</a>
            </div>
        <div className="row p-3 ">
                <div className='col-6 p-3'>
                 <h1 className='fs-3'>Search for an answer on browser help topics to create a ticket</h1>
                 <input placeholder="Eg. how do i activate F&0" /><br />
                 <a href="" >Track account opening</a>
                 <a href="" >Track segemnt activation</a>
                 <a href="" >Intraday margins</a>
                 <a href="" >Kite user manual</a>
                </div>
                <div className='col-6 p-3 mt-2 mb-5'>
                <h1 className='fs-3 mb-2'>Features</h1>
                <ul>
                    <li><a href="">Cureent Takeovers and Delisting</a> </li>
                    <li><a href="">Track segment activation</a></li>
                </ul>
                </div>
            </div>
            </section>

    )
}
export default Hero;