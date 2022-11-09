import React, { useState } from 'react'
import { View } from 'react-native'
import { Appbar, Button, TextInput, useTheme } from 'react-native-paper'
import Spacer from '../../../components/Spacer'

const LoginScreen = ({ navigation }) => {
  const theme = useTheme()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header
        style={{ backgroundColor: theme.colors.primaryContainer }}
      >
        <Appbar.Content
          title="Login"
        />
      </Appbar.Header>

      <View style={{ paddingHorizontal: 24, paddingTop: 16, }}>
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
          onChangeText={text => setPassword(text)}
        />
        <Spacer height={36} />
        <Button
          mode="contained-tonal"
          onPress={() => { }}
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
    </View>
  )
}

export default LoginScreen