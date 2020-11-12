debugger
#json.extract! @users, :id, :username
json.partial! "api/users/user.json.jbuilder", user: @user