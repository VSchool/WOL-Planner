/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { createData, getCollectionData, getDataByField, getRealtimeDatabase, updateData, updateRealtimeDatabase } from '@nx-template/firebase'

@Injectable()
export class UsersService {

  getUsers(): Promise<any> {
    console.log('getUsers')
    return getCollectionData({
      collection: 'users'
    })
  }

  async signInUser(body): Promise<any> {
    console.log(body, "*******")
    try{
        const user = await getDataByField({
            collection: 'users',
            field: 'email',
            matches: body['email']
        })

        if(user.length > 0) {
            return user[0]
        }

        body['joinDate'] = new Date()
        body['userType'] = 'Reader'
        const nameArr = body['name'].split(' ')
        body['firstName'] = nameArr[0]
        body['lastName'] = nameArr[1] || ""
        body['roles'] = []
        body['active'] = true

        const userIdObj = await createData({
            collection: 'users',
            params: body
        })

        body['id'] = userIdObj.id
        return body
    } catch (error) {
        console.log(error)
        return error
    }
  }

  async signUpUser(body): Promise<any> {
    // console.log(body, "======")
    try{
        const user = await getDataByField({
            collection: 'users',
            field: 'email',
            matches: body['email']
        })
        if(user.length > 0) {
          // console.log("user already exists")
            // return user[0]
            return {success: false, message: "User already exists."} 
        }

        body['joinDate'] = new Date()
        body['userType'] = 'Reader'
        // const nameArr = body['name'].split(' ')
        // body['email'] = nameArr[0]
        // body['password'] = nameArr[1]
        // body['firstName'] = nameArr[2]
        // body['lastName'] = nameArr[3]
        // body['username'] = nameArr[4]
        body['roles'] = []
        body['active'] = true

        const userIdObj = await createData({
            collection: 'users',
            params: body
        })

        body['id'] = userIdObj.id
        return body
    } catch (error)  {
        console.log(error)
        return error
    }
  }

  async updateUserData(body): Promise<any> {
    try {
        await updateData({
            collection: 'users',
            docId: body['id'],
            params: body
        })
        return body
    } catch (error) {
        console.log(error)
        return error
    }
  }

  async getUsersFromSearch(search): Promise<any> {
    try {
        if(search === '') {
          const users = await getCollectionData({
              collection: 'users'
          })
          return users
        }
        const nameMatches = await getCollectionData({
            collection: 'users',
            options: {
              name: search
            }
        })

        const firstNameMatches = await getCollectionData({
            collection: 'users',
            options: {
              firstName: search
            }
        })

        const lastNameMatches = await getCollectionData({
            collection: 'users',
            options: {
              lastName: search
            }
        })

        const duplicateMatches = [...nameMatches, ...firstNameMatches, ...lastNameMatches]
        const uniqueMatches = duplicateMatches.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)

        return uniqueMatches
    } catch (error) {
        console.log(error)
        return error
    }
  }

  async getUsersInRealtimeDatabaseExample(): Promise<any> {
    try {
        const users = await getRealtimeDatabase({path: 'users'})
        return users
    } catch (error) {
        console.log(error)
        return error
    }
  }

  async postUserInRealtimeDatabaseExample(body): Promise<any> {
    try {
        const users = await updateRealtimeDatabase({path: `users/${body.id}`, updates: body})
        return users
    } catch (error) {
        console.log(error)
        return error
    }
  }
}