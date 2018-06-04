import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import { RNCamera } from 'react-native-camera';

import PendingView from './pendingView';

const styles = StyleSheet.create({
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      }
});

class Camera extends Component {
    render() {
        return (
            <View>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    type={RNCamera.Constants.Type.back}
                >
                {({ camera, status }) => {
                if (status !== 'READY') return <PendingView />;
                    return (
                        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                                <Text style={{ fontSize: 14 }}> SNAP </Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
                </RNCamera>
            </View>
        );
    }

    takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        //  eslint-disable-next-line
        console.log(data.uri);
      }
}

export default Camera;