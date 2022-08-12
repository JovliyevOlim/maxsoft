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

    const products = [
        {title:'Restaurant Booking App', framework:'React & Bootstrap framework', sale:'70'},
        {title:'UI Kit', framework:'React & Bootstrap framework', sale:'54'},
        {title:'Design System Pro', framework:'React & Bootstrap framework', sale:'47'},
        {title:'Dashboard', framework:'React & Typescript', sale:'43'},
        {title:'Figma', framework:'React & Bootstrap framework', sale:'74'},
        {title:'App', framework:'Bootstrap framework', sale:'56'},
    ]

    return (
        <div className={"box"}>
            <div className="box-1">
                <div className="card" >
                    <div className="card-header">
                        <h5>Latest Customers</h5>
                    </div>
                    <div className="card-body" >
                        {
                            arr.map((item,index)=><div className={"map"}>
                                <span className={"avatar"}>
                                    <img src={img} alt=""/>
                                </span>
                                <div>
                                    <div className={'name'}>
                                        <b>{item.name}</b>
                                        <b>{"_" +item.lastName}</b>
                                    </div>
                                    <div className={"email"}>{item.email}</div>
                                </div>

                                <div className={'salary'}><b>{item.salary}</b></div>
                            </div>)
                        }
                    </div>
                </div>
            </div>

            <div className="box-2">
                <div className="card">
                    <div className="card-header">
                        <h5>Top Products</h5>
                    </div>
                    <div className="card-body">
                        {
                            products.map((item,index)=><div className={"map"}>
                                <div className={"title"}>
                                    <b>{item.title}</b>
                                    <div className={"framework"}>{item.framework}</div>
                                </div>
                                <p className={"sale"}><b>{item.sale+" "}</b>sales</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Table
