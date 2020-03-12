import React,{Component} from 'react';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

import App from '../App';
import {Root, StyleProvider} from 'native-base';


export default class ThemeExample extends Component {
 render() {
   return (
     <Root>
      <StyleProvider style={getTheme(platform)}>
          <App />
     </StyleProvider>
   </Root>
   );
 }
}
