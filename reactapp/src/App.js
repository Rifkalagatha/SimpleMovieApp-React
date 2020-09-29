import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Result from './components/result'
import Form from './components/Form'
import GlobalData from './components/globalData'


// function App() {
//   return (
//     <div>
//       conpenhagen
//     </div>
//   );
// }

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      result: [],
      params: 'indonesia',
      dataStatus: [],
      status: ''
    }
  }

  componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/"
    fetch(`${proxy}https://api.kawalcorona.com/${this.state.params}`)
      .then(res => res.json())
      .then(data => {
        console.log(data[0], 'ini')
        this.setState({
          result: data[0]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  editData = (params) => {
    const proxy = "https://cors-anywhere.herokuapp.com/"
    fetch(`${proxy}https://api.kawalcorona.com/${params}`)
      .then(res => res.json())
      .then(data => {
        console.log(data, 'iniparams')
        console.log(params)
        this.setState({
          dataStatus: data,
          status: params
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  // addData = (params) => {
  //   this.setState({
  //     status:params
  //   })
  //   const proxy = "https://cors-anywhere.herokuapp.com/"
  //   fetch(`${proxy}https://api.kawalcorona.com/${this.state.status}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         data
  //       })
  //       console.log(this.state.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //   this.setState({
  //     params
  //   })
  //   console.log(this.state.params, '<<ini params')
  // }

  

  render() {
    const { username, result, status, dataStatus} = this.state
    return (
      <div style={{ padding: '2rem' }}>
        <div>{username}</div>
        <Result data={result} />
        <Form editStatus={this.editData}/>
        <div class='mt-5'>
                <GlobalData status={status} dataStatus={dataStatus}/>
                </div>
      </div>
    )
  }
}

export default App;
