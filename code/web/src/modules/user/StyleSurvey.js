//Possible Needed Imports (basing this on other files pertaining to user)

//////Seems like these are pretty consistent across all user files.
// import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { Helmet } from 'react-helmet'
// import { Link } from 'react-router-dom'

//////UI stuff we'll probably need
// import { H3, H4 } from '../../ui/typography'
// import Button from '../../ui/button'
// import { grey, grey2 } from '../../ui/common/colors'

//////ETC stuff we'll probably need
//import userRoutes from '../../setup/routes/user'
//////^^regarding above, i think we'll need to put the route back into the big 'ol file with the rest of 'em
//import AuthCheck from '../auth/AuthCheck'
//import { APP_URL } from '../../setup/config/env'
//////^^literally have no idea if we'll need this but it seems important???


//render skeleton!!! i have some Thots

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
        <Button></Button>
      </form>
    </div>





  )
}
