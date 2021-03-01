// mongodb+srv://dev:<password>@imperial-cluster.et9um.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const database = 'imperial';
const username = 'imperial-dev';
const password = '3FaC60pI5HNhC4K0';

module.exports =  {
  mongoURI: `mongodb+srv://${username}:${password}@imperial-cluster.et9um.mongodb.net/${database}?retryWrites=true&w=majority`,
  secretOrKey: 'secret',
}
