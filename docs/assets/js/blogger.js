export default class Blog {
  constructor(host) {
    this.url = new URL(host)
    this.posts = []
    
    bindPaths(this)
  }
  
  fetchXML(callback) {
    console.error('xml fetching method will comming soon.')
    return
  }
  
  fetchJSON(callback) {
    fetch(this.feeds.json)
      .then(response => response.json())
      .then(data => callback.call(data))
  }
}

function bindPaths(blog) {
  let u = new URL(blog.url)
  let q = new URLSearchParams
  u.path = '/feeds/default'
  
  q.set('rel', 'rss')
  blog.url.search = q
  blog.feeds.xml = blog.url.toString()
  
  q.set('rel', 'json')
  blog.url.search = q
  blog.feeds.json = blog.url.toString()
}
