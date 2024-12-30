import React, {useState} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const currentVersion = DeviceInfo.getVersion();

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={require('../../assets/dummy/bg.jpg')}
      />
      <Image
        style={{width: 100, marginTop: 50, marginBottom: 20, height: 100}}
        source={require('../../assets/logo/logo.png')}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Username"
          underlineColorAndroid="transparent"
          value={username}
          onChangeText={currentUsername => setUsername(currentUsername)}
          autoFocus={true}
          returnKeyType="next"
          onSubmitEditing={() => {}}
        />
        <Image
          style={styles.inputIcon}
          source={require('../../assets/icon/email.png')}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          value={password}
          onChangeText={currentPassword => setPassword(currentPassword)}
          onSubmitEditing={() => {}}
        />
        <Image
          style={styles.inputIcon}
          source={require('../../assets/icon/key.png')}
        />
      </View>

      <TouchableOpacity style={styles.btnForgotPassword} onPress={() => {}}>
        <Text style={styles.btnText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => {}}
        disabled={isRefreshing}>
        <Text style={styles.loginText}>Login</Text>
        {isRefreshing && (
          <ActivityIndicator
            size={'small'}
            color={'white'}
            animating={true}
            style={{marginLeft: 8}}
          />
        )}
      </TouchableOpacity>

      <Text>Version : {currentVersion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: '#00b5ec',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
