import React from 'react'

import Article from './components/article'
import Label from './components/label'
import CircleProfile from './components/circleprofile'

class Home extends React.Component {
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
          <Article
            title="I'm Tony. Here's my stuff."
            body="<p>This site was conceived as a showcase for some of my abilities as a front-end developer. It's built as a single page React app because that is what I've spent the last year teaching myself. Please enjoy, and feel free to reach out to <a href='mailto:tonytrucco@gmail.com'>me</a>.</p>"
          />
          <div style={{ textAlign: 'center' }}>
          <div className='self'>
            <CircleProfile
              image='/images/tonytrucco.gif'
            />
          </div>
          <Label
            icon='fa-user'
            text='My online profiles'
          />
          <div className='flex centered h-centered'>
          <h2><a href='https://github.com/tonytrucco-CS' target='_blank' rel='noopener noreferrer'><i className='fa fa-fw fa-2x fa-github-square' /></a></h2>
          <h2><a href='https://www.linkedin.com/in/tony-trucco-ba62874a/' target='_blank' rel='noopener noreferrer'><i className='fa fa-fw fa-2x fa-linkedin-square' /></a></h2>
          <h2><a href='http://steamcommunity.com/id/ironnmetal/' target='_blank' rel='noopener noreferrer'><i className='fa fa-fw fa-2x fa-steam-square' /></a></h2>
          </div>
          <Label
            icon='fa-mobile'
            text='Resume and contact info'
          />
          <h2><a href={ `${process.env.PUBLIC_URL}/trucco_resume2018.pdf` } target='_blank' rel='noreferrer noopener'>Download my resume</a></h2>
          <h2><a href='mailto:tonytrucco@gmail.com'>Email me: tonytrucco@gmail.com</a></h2>
          <h2><a href='tel:614-282-8186'>Call me: (614) 282-8186</a></h2>
        </div>
        </div>
      </div>
    )
  }
}

export default Home;
