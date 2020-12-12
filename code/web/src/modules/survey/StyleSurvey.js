import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

//////UI stuff we'll probably need
import { Grid, GridCell } from '../../ui/grid'
import Button from '../../ui/button'
import ImageTile from '../../ui/image/Tile'
import { H3, H4, H6 } from '../../ui/typography'
import { white, grey, grey2 } from '../../ui/common/colors'
import { level1 } from '../../ui/common/shadows'


//////ETC stuff we'll probably need
import AuthCheck from '../auth/AuthCheck'
import { APP_URL } from '../../setup/config/env'

class StyleSurvey extends Component {

  constructor(props) {
    super(props)

    this.state = {
      styles: [],
    }
  }

  findUserStyles = () => {
    const styleTally = this.state.styles.reduce((acc, style) => {
      acc[style] += 1
      return acc
    }, {classic: 0, punk: 0, sporty: 0})
    return styleTally
  }

  getStyleTally = () => {
    const styles = this.findUserStyles()
    let sortedTally = Object.values(styles).sort((a, b) => b - a)
    Object.keys(styles).forEach(style => {
      if (sortedTally[0] && sortedTally[0] === styles[style]) {
        this.state.topStyles.push(style)
      }
    });
    return styles
  }
  
  logStyleType = (e) => {
    let jsxString = e.target.className
    let jsxTagSplit = jsxString.split(' ')
    let style = jsxTagSplit[1]
    this.state.styles.push(style)
  }

  submitSurvey = (e) => {
    e.preventDefault()
    this.getStyleTally()
  }

  populateSurveyImages(surveySection, image1, image2, image3) {
    return (
      <div >
      <H6 font='secondary' style={{ textAlign: 'center', paddingBottom: '.5em', paddingTop: '1em'}}>{surveySection}</H6>
        <Grid style={{ display: 'flex', backgroundColor: grey }}>
          <GridCell style={{ padding: '1em' }}>
            <ImageTile className='classic' onClick={this.logStyleType} width={300} height={300} shadow={level1} image={`${ APP_URL }${image1}`}/>
          </GridCell>
          <GridCell style={{ padding: '1em' }}>
            <ImageTile className='punk' onClick={this.logStyleType} width={300} height={300} shadow={level1} image={`${ APP_URL }${image2}`}/>
          </GridCell>
          <GridCell style={{ padding: '1em' }}>
            <ImageTile className='sporty' onClick={this.logStyleType} width={300} height={300} shadow={level1} image={`${ APP_URL }${image3}`}/>
          </GridCell>
        </Grid>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Grid alignCenter={true} style={{ padding: '2em', backgroundColor: grey }}>
          <GridCell style={{ textAlign: 'center'}}>
            <H3 font='secondary'>Find your style!</H3>
            <p style={{ marginTop: '1em', color: grey2 }}>Pick which styles suit your tastes!</p>
          </GridCell>
        </Grid>
        <Grid justifyCenter={true}>
          {this.populateSurveyImages('Tops', '/images/stock/survey/survey-classictop.jpg', '/images/stock/survey/survey-punktop.png', '/images/stock/survey/survey-sportytop.jpg')}
          {this.populateSurveyImages('Bottoms', '/images/stock/survey/survey-classicbottom.png', '/images/stock/survey/survey-punkbottoms.jpg', '/images/stock/survey/survey-sportybottoms.jpg')}
          {this.populateSurveyImages('Shoes', '/images/stock/survey/survey-classicshoes.jpeg', '/images/stock/survey/survey-sportyshoe.jpeg', '/images/stock/survey/survey-punkshoes.jpg')}
          {this.populateSurveyImages('Accessories', '/images/stock/survey/survey-classicshoes.jpeg', '/images/stock/survey/survey-punkshoes.jpg', '/images/stock/survey/survey-sportyshoe.jpeg')}
          {this.populateSurveyImages('Loungeware', '/images/stock/survey/survey-classicshoes.jpeg', '/images/stock/survey/survey-punkshoes.jpg', '/images/stock/survey/survey-sportyshoe.jpeg')}
        </Grid>
        <Grid justifyCenter={true}>
          <GridCell  style={{ padding: '2em', textAlign: 'center' }}>
            <Button onClick={this.submitSurvey} theme="primary">Submit</Button>
          </GridCell>
        </Grid>
      </div>
    )
  }
}


export default StyleSurvey
