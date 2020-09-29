import React from 'react'

class GlobalData extends React.Component {
    render() {
        const { dataStatus } = this.props
        if (this.props.status) {
            return (
                <div class='d-flex justify-content-center'>
                    <div class="card shadow text-center">
                        <div class="container">
                            <h4><b>{dataStatus.name}</b></h4>
                            <p>{dataStatus.value}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <h1 class='text-center'>silahkan pilih data global</h1>
            )
        }

    }
}

export default GlobalData