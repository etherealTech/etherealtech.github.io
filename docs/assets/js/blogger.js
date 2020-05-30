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
  blog.url.path = '/feeds/default'
  blog.url.search = new URLSearchParams
  
  blog.url.search.set('rel', 'rss')
  blog.feeds.xml = blog.url.toString()
  
  blog.url.search.set('rel', 'json')
  blog.feeds.json = blog.url.toString()
}
