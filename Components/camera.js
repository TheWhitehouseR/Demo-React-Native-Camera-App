import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { RNCamera } from 'react-native-camera';

class Camera extends Component {
    render() {
        return (
            <View>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    type={RNCamera.Constants.Type.back}
                />
            </View>
        );
    }
}

export default Camera;