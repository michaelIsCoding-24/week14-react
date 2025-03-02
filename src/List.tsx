import Item from "./Item"

const testData = [
    {
      id: 1,
      text: "Wash dishes"
    },
    {
      id: 2,
      text: "Do laundry"
    },
    {
      id: 3,
      text: "Do a reaaaally cool backflip"
    },
    {
      id: 4,
      text: "Feed the Chickens"
    } 
];

function List(){
    return (
        <div className="col-9 pt-3">
        <table className="table table-responsive table-striped">
            <thead>
                <tr>
                    <th className="fs-1">
                        Things To Do:
                    </th>
                </tr>
            </thead>
            <tbody>
                    { testData.map(testData => 
                    <tr key={testData.id}>
                        <Item item={testData}/>
                    </tr>)}
            </tbody>

        </table>
        </div>
    )
}

export default List