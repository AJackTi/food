import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createSwitchNavigator({
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
}, {
    initialRouteName: "Search",
    defaultNavigationOptions: {
        title: "Business Search"
    }
})

export default createAppContainer(navigator)

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text>Open up App.js to start working on your app!</Text>
//             <StatusBar style="auto"/>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
