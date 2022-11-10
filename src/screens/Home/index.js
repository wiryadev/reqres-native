import { View, Text, FlatList } from 'react-native'
import React, { useCallback } from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import UserItem from '../../components/UserItem'
import { useGetUsersQuery } from '../../services/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../../redux/actions/AuthAction'

const HomeScreen = ({ navigation }) => {

  const theme = useTheme()

  useGetUsersQuery()
  const users = useSelector((state) => state.user.users)

  const dispatch = useDispatch()
  const onLogout = useCallback(
    () => {
      dispatch(logoutAction())
      navigation.replace('LoginScreen')
    },
    [],
  )


  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: theme.colors.primaryContainer }}    >
        <Appbar.Content
          title="Home"
        />
        <Appbar.Action icon="location-exit" onPress={onLogout} />
      </Appbar.Header>
      <FlatList
        data={users || []}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View style={{ flex: 1, padding: 32, alignItems: 'center' }}>
            <Text>Data is Empty</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <UserItem
            user={item}
            onPress={() => { }}
          />
        )}
      />
    </View>
  )
}

export default HomeScreen