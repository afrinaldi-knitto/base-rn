import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {useLoginMutation} from '../../redux/api/loginApi';
import ProgressButton from './components/progress-button';
import FormTextInput from './components/form-text-input';
import {useAppDispatch, useAppSelector} from '../../lib/hooks/appHook';
import {
  resetAuth,
  setPassword,
  setUsername,
} from '../../redux/slice/loginSlice';
import {showToast} from '../../lib/utils/toast';
import Config from 'react-native-config';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [login, {isLoading}] = useLoginMutation();
  const currentVersion = DeviceInfo.getVersion();
  const {username, password} = useAppSelector(state => state.login);

  const handleLogin = async () => {
    Keyboard.dismiss();
    if (username === '' || password === '') {
      showToast("username & password can't empty");
      return;
    }

    try {
      const response = await login({title: username, body: password}).unwrap();
      console.log('Login Successful:', response);
      dispatch(resetAuth());
      showToast(`Login Success ${response}`);
    } catch (err) {
      console.error('Login Failed:', err);
      showToast(`URL : ${Config.URL} Fail : ${JSON.stringify(err)}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.bgImage}
        source={require('../../assets/dummy/bg.jpg')}
      />
      <Image
        style={{width: 100, marginTop: 50, marginBottom: 20, height: 100}}
        source={require('../../assets/logo/logo.png')}
      />
      <FormTextInput
        onChange={text => dispatch(setPassword(text))}
        placeholder="Username"
        value={password}
        iconSource={require('../../assets/icon/email.png')}
        returnKeyType="next"
        autoFocus
      />

      <FormTextInput
        onChange={text => dispatch(setUsername(text))}
        placeholder="Password"
        value={username}
        iconSource={require('../../assets/icon/key.png')}
        returnKeyType="next"
        secureTextEntry
      />

      <TouchableOpacity style={styles.btnForgotPassword} onPress={() => {}}>
        <Text style={styles.btnText}>Forgot Password?</Text>
      </TouchableOpacity>

      <ProgressButton
        isLoading={isLoading}
        onPress={handleLogin}
        text="Login"
      />

      <Text>
        Version : {currentVersion} - {Config.ENV}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  btnForgotPassword: {
    height: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent',
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

export default LoginPage;
