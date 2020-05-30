let uri = new URL(location)

window.addEventListener('load', function() {
  document.body.append(
    createScriptElement('module', '/'+ GITHUB_REPO_NAME + '/assets/js/app.js')
  )
})

function createScriptElement(type, src) {
  var el = document.createElement('script')
  var sl = src.slice(0, 2)
  el.type = type
  el.src = (sl !== '//' || sl !== 'ht') ? uri.origin + src : src
  return el
}
