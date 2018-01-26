import React from 'react'

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: this.props.open || false
    }
    this.setValue = this.setValue.bind(this);
  }

  setValue(key, val) {
    let temp = {};
    temp[key] = val;
    this.setState(temp);
  }

  render() {
    return (
      <article className={ this.state.article ? '' : 'collapsed' }>
        <div className='flex end'>
          <h1 className='wide'>{ this.props.title }</h1>
          <div className='section-close' onClick={ ()=> { this.setValue('article', !this.state.article) } }>
            { this.state.article ?
              <i className='fa fa-fw fa-times' />
              :
              <i className='fa fa-fw fa-plus' />
            }
          </div>
        </div>
        { this.state.article &&
          <div className='copy'>
            <div dangerouslySetInnerHTML={{ __html: this.props.body }} />
            { this.props.source &&
              <p className='source'>Source: <a href={ this.props.source.link } target='_blank'>{ this.props.source.title }</a></p>
            }
          </div>
        }
      </article>
    )
  }
}

export default Article;
