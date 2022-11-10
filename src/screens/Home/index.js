import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'
import UserItem from '../../components/UserItem'
import { useGetUsersQuery } from '../../services/userApi'
import { useSelector } from 'react-redux'

const HomeScreen = ({ navigation }) => {

  useGetUsersQuery()

  const users = useSelector((state) => state.user.users)

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header      >
        <Appbar.Content
          title="Home"
        />
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