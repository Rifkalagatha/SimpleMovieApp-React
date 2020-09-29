import React, { Component } from 'react'


export default class Form extends Component {

    constructor() {
        super()
        this.state = {
            params: ""
        }
    }

    onInputChange = (event) => {
        // let newName = event.target.value
        // console.log(newName)
        this.setState({
            params: event.target.value
        })
    }

    // onFormSubmit = (event) => {
    //     event.preventDefault()
    //     // alert(this.state.name)
    //     console.log(this.state.params)
    //     this.props.addData(this.state.params)
    // }

    onPositifButton = (event) => {
        event.preventDefault()
        this.props.editStatus('positif')
    }

    onSembuhButton = (event) => {
        event.preventDefault()
        this.props.editStatus('sembuh')
    }

    onMeninggalButton = (event) => {
        event.preventDefault()
        this.props.editStatus('meninggal')
    }

    render() {
        return (
            <div>
                <h1 class='text-center'>Global Data</h1>
                <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
                    <button onClick={this.onPositifButton} type="button" class="btn btn-secondary">Positif</button>
                    <button onClick={this.onSembuhButton} type="button" class="btn btn-secondary">Sembuh</button>
                    <button onClick={this.onMeninggalButton} type="button" class="btn btn-secondary">Meninggal</button>
                </div>
                
                
            </div>
        )
    }
}
