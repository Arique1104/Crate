import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

//////UI stuff we'll probably need
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

//////ETC stuff we'll probably need
import AuthCheck from '../auth/AuthCheck'
//import { APP_URL } from '../../setup/config/env'

render() {
  return (
    <div>
      <form>
        <Grid>
          <GridCell>
            {/*this is where the images and such go! they will be in a grid. we'll have 3 each.*/}
          </GridCell>
          <GridCell>
            {/*this is where the images and such go! they will be in a grid. we'll have 3 each.*/}
          </GridCell>
          <GridCell>
            {/*this is where the images and such go! they will be in a grid. we'll have 3 each.*/}
          </GridCell>
        </Grid>
        {/*^^ Repeat the grid and gridcell pattern for each element of the survey*/}
        <Button type="button">Test Butt</Button>
      </form>
    </div>





  )
}
