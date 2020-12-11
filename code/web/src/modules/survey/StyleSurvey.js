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
import { grey, grey2 } from '../../ui/common/colors'

//////ETC stuff we'll probably need
import AuthCheck from '../auth/AuthCheck'
//import { APP_URL } from '../../setup/config/env'

class StyleSurvey extends Component {

  constructor(props) {
    super(props)

    this.state = {
      styles: []
    }
  }

  //

  render() {
    return (
      <div>
        <Grid alignCenter={true} style={{ padding: '2em', backgroundColor: grey }}>
          <GridCell style={{ textAlign: 'center'}}>
            <H3 font='secondary'>Find your style!</H3>
            <p style={{ marginTop: '1em', color: grey2 }}>Pick which styles suit your tastes!</p>
          </GridCell>
        </Grid>
        <Grid>
          <GridCell style={{ textAlign: 'center', padding: '1em'}}>
            <H6 font='primary'>Literally Why Man</H6>

          </GridCell>
        </Grid>
        <Button theme="primary">Submit</Button>
      </div>
    )
  }
}

// <div>
//   <form  onSubmit={console.log('test')}>
//     <H3 style={{ marginTop: '2em' }} font="secondary">TOP STYLE SELECTION</H3>
//     <Grid>
//       <GridCell>
//         <H6>TOP 1</H6>
//       </GridCell>
//       <GridCell>
//         <H6>TOP 2</H6>
//       </GridCell>
//       <GridCell>
//         <H6>TOP 3</H6>
//       </GridCell>
//     </Grid>
//     <Button type="button" theme="secondary">TEST</Button>
//   </form>
// </div>

export default StyleSurvey
