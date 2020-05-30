import Blog from './blogger.js'

let blog = new Blog('https://mymmtech.blogspot.com')

blog.fetchJSON(renderPosts)

function renderPosts() {
  console.log(this)
  alert(1)
}
