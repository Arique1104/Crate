// App Imports
import List from '../../modules/crate/List'

// Crate routes - path where new feature building starts
  // when user clicks 'subscriptions' user should be routed to /crates and see subscription options 
export default {
  list: {
    path: '/crates',
    component: List,
    auth: true
  }
}
