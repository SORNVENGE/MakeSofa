import React, { Component } from 'react'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import { Dimensions, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Colors, Images, ApplicationStyles, Fonts, Metrics } from '../Themes'

// Styles
import styles from './Styles/RootContainerStyles'


import NavigationRouter from '../Navigation/NavigationRouter'
import HeaderScreen from './HeaderScreen';
import FooterScreen from './FooterScreen'


const MyStatusBar = ({ backgroundColor, ...props }) => (
	<View style={[styles.statusBar, { backgroundColor }]}>
	  	<StatusBar translucent backgroundColor={backgroundColor} {...props} />
	</View>
);

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
		StatusBar.setBackgroundColor(Colors.bgStatusBar, true);

    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }


  render () {
    const StatusBarAPP = (<MyStatusBar backgroundColor={Colors.bgStatusBar} barStyle="light-content" />);
    	console.disableYellowBox = true;
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
          <HeaderScreen />
					  <NavigationRouter />
					<FooterScreen/>
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
