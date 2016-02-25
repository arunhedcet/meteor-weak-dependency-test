Package.describe({
  summary: "Test of Meteor's weak dependency resolution"
})

Package.on_use(function (api) {
  api.use('iron:router', ['client', 'server'], {weak: true})

  api.add_files('weak-test.js', 'server')
})
