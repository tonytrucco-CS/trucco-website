import React from 'react'

class Career extends React.Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='main-content'>
        <div className='container'>
          <h1>Tony Trucco</h1>
          <h2>Web Designer</h2>
          <p>tonytrucco.com</p>
          <p>tonytrucco@gmail.com</p>
        </div>
      </div>
    )
  }
}

export default Career;
