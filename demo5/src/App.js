//import lib
import React ,{Component} from 'react';
import Camera from 'react-native-camera';
import { Screen } from '@shoutem/ui';
//import component


class App extends Component {
    render() {
        return (
            <Screen>
                <Camera style={{flex: 1}}
                        ref={cam => this.camera=cam}
                        aspect={Camera.constants.Aspect.fill}>

                </Camera>
            </Screen>
        );
    }
}

export default App;