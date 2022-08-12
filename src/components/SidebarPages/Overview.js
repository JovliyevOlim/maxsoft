import Chart from '../SidebarPages/Chart'
import Table from "../Data/Table";
import Table2 from '../Data/Table2'
import '../Data/table.css'
function Overview(){

    return (
        <div className={'home'}>
            <div className={'mb-4'}>
                <Chart/>
                <Table/>
            </div>
            <div className="listContainer">
                <div className="listTitle">
                    <h4>Transactions</h4>
                    <p>This is a list of latest transactions</p>
                </div>
                <Table2/>
            </div>
        </div>
    )
}
export default Overview
