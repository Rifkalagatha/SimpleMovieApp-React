import React from 'react'

class Result extends React.Component {
    render() {
        console.log(this.props.data.name, 'aa')
        const { data } = this.props
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">positif</th>
                            <th scope="col">sembuh</th>
                            <th scope="col">meninggal</th>
                            <th scope="col">dirawat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.positif}</td>
                            <td>{data.sembuh}</td>
                            <td>{data.meninggal}</td>
                            <td>{data.dirawat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Result