const User = require('./../models/user')
class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(User){
        return  [User.id, User.username, User.name, User.getBio ]
    }

    static updateUsername(User,newName){
       return User.setUsername = newName
    }

    static getAllUsernames(users){
        const usersUsernames = users.map( user => user.username)
        return usersUsernames
      }
   
    

}

module.exports =UserService