import img from '../../img/directbox-default.png'
import './table.css'
function Table(){


    const arr = [
        {name: "Neil",lastName: 'Sims', email:'email@example.com',salary:'367$'},
        {name: "Bonnie",lastName: 'Green', email:'email@example.com',salary:'67$'},
        {name: "Micheal",lastName: 'Gough', email:'email@example.com',salary:'3467$'},
        {name: "Thomas",lastName: 'Lean', email:'email@example.com',salary:'3647$'},
        {name: "Lana",lastName: 'Byrd', email:'email@example.com',salary:'367$'},
        {name: "Karen",lastName: 'Nelson', email:'email@example.com',salary:'1367$'},
    ]
    return (
        <div className={"box"}>
            <div className="box-1">

                <div className="card" style={{width:'33%'}}>
                    <div className="card-header">
                        <h5>Latest Customers</h5>
                    </div>
                    <div className="card-body" >
                        {
                            arr.map((item,index)=><div className={"d-flex"}>
                                <span className={"avatar"}>
                                    <img src={img} alt=""/>
                                </span>
                                <div>{item.name}</div>
                                <div>{item.lastName}</div>
                                <div>{item.email}</div>
                                <div>{item.salary}</div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Table
