import React from 'react'

export class RecentlySold extends React.Component {

    




    render() {
        return (
            <div className="card d-flex m-2 flex-fill" style={{width: '18rem'}}>
                <div className="card-body shadow rounded">
                    <h2 className="card-title">Recently Sold Products</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="card-text"></p>
                </div>
      </div>
        )
    }
}

export default RecentlySold
