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
        navigation.navigate('HomeScreen')
      })
      .catch((err) => {
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

      <View style={{ paddingHorizontal: 24, paddingTop: 24, }}>
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
        <Button
          mode="contained-tonal"
          onPress={onLoginClick}
        >
          Login
        </Button>
        <Spacer height={16} />
        <Button
          mode="text"
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          Register
        </Button>
      </View>
      <Spacer height={24} />
      <ActivityIndicator
        animating={isLoading}
      />
    </View>
  )
}

export default LoginScreen