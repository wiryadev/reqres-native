import React, { useState } from 'react'
import { Alert, View } from 'react-native'
import { ActivityIndicator, Appbar, Button, TextInput, useTheme } from 'react-native-paper'
import Spacer from '../../../components/Spacer'
import { useLoginMutation } from '../../../services/authApi'

const LoginScreen = ({ navigation }) => {

  const theme = useTheme()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, { isLoading }] = useLoginMutation()
  const onLoginClick = () => {
    login({ email, password })
      .unwrap()
      .then((response) => {
        console.log('response', response)
        navigation.replace('HomeScreen')
      })
      .catch((err) => {
        console.log('error', err)
        Alert.alert('Error', err.data.error)
      })

  }

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header
        style={{ backgroundColor: theme.colors.primaryContainer }}
      >
        <Appbar.Content
          title="Login"
        />
      </Appbar.Header>

      <View style={{ paddingHorizontal: 24, paddingTop: 32, }}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Spacer height={16} />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <Spacer height={48} />
        {isLoading
          ? <ActivityIndicator
            animating
          />
          : <Button
            mode="contained-tonal"
            onPress={onLoginClick}
          >
            Login
          </Button>
        }
        <Spacer height={16} />
        <Button
          mode="text"
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          Register
        </Button>
      </View>
      <Spacer height={24} />
    </View>
  )
}

export default LoginScreen