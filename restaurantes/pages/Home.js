import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import TopButtons from '../components/TopButtons';
import BigButton from '../components/BigButton';
import { TextInput } from 'react-native-paper';
import TextInputs from '../components/Textinputs';

const width = Dimensions.get('screen').width * 0.16;
const height = Dimensions.get('screen').height * 0.16;

export default function Home(props) {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const validLogin = () => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase());
  };
  return (
    <KeyboardAvoidingView
      //behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={props.styles.container}>
          <View style={props.styles.topButtonContainer}>
            <TopButtons
              styles={props.styles}
              state={props.state}
              setState={props.setState}
              lang={props.lang}
              buttons={[
                {
                  text: props.lang.login,
                  func: () => {
                    props.setState({ ...props.state, mode: 0 });
                  },
                },
                {
                  text: props.lang.signup,
                  func: () => {
                    props.setState({ ...props.state, mode: 1 });
                  },
                },
              ]}
            />
            <View style={props.styles.spacing2}></View>
          </View>
          <View style={props.styles.spacing05}></View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView style={props.styles.container2}>
              <View style={props.styles.spacing5}></View>
              <Image
                style={{
                  alignSelf: 'center',
                }}
                source={require('../assets/icon.png')}
                width={'40%'}
              />
              <View style={props.styles.row}>
                <View style={props.styles.width10} />
                <View style={props.styles.width80}>
                  {props.state.mode === 0 ? (
                    <>
                    <TextInputs
                      inputs={[
                        {
                          label: props.lang.email,
                          value: email,
                          func: (text) => setEmail(text),
                          password: false,
                        },
                        {
                          label: props.lang.password,
                          value: password,
                          func: (text) => setPassword(text),
                          password: true,
                        },
                      ]}
                      email={email}
                      password={password}
                      setEmail={setEmail}
                      setPassword={setPassword}
                      {...props}
                    />
                  <BigButton
                    {...props}
                    text={props.lang.login}
                    func={() => {
                      alert('Login');
                    }}
                  />
                    </>
                  ) : (
                    <>
                    <TextInputs
                      inputs={[
                        {
                          label: props.lang.companyName,
                          value: company,
                          func: (text) => setCompany(text),
                          password: false,
                        },
                        {
                          label: props.lang.email,
                          value: email,
                          func: (text) => setEmail(text),
                          password: false,
                        },
                        {
                          label: props.lang.password,
                          value: password,
                          func: (text) => setPassword(text),
                          password: true,
                        },
                        {
                          label: props.lang.confirmPassword,
                          value: passwordConfirm,
                          func: (text) => setPasswordConfirm(text),
                          password: true,
                        },
                      ]}
                      email={email}
                      password={password}
                      setEmail={setEmail}
                      setPassword={setPassword}
                      {...props}
                    />
                  <BigButton
                    {...props}
                    text={props.lang.signup}
                    func={() => {
                      alert('Login');
                    }}
                  />
                    </>
                  )}

                </View>
                <View style={props.styles.width10} />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
          <View style={props.styles.spacing05}></View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
