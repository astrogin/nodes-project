const response = {
  handleErrors (err, component) {
    return this[err.response.status](err.response, component)
  },
  handleSuccess (success, component) {
    return this[success.status](success, component)
  },
  getResponse (res) {
    return res.data.data
  },
  200 (success, component) {
    let message = success.data.message ? success.data.message : 'Success'
    component.$notifications.notify({
      message: '<h3>' + message + '</h3>',
      icon: 'ti-bell',
      horizontalAlign: 'right',
      verticalAlign: 'bottom',
      type: 'success',
      timeout: 2000
    })
  },
  201 (success, component) {
    component.$notifications.notify({
      message: '<h3>Success</h3>',
      icon: 'ti-bell',
      horizontalAlign: 'right',
      verticalAlign: 'bottom',
      type: 'success',
      timeout: 2000
    })
  },
  400 (err, component) {
    component.$notifications.notify({
      message: '<h3>' + err.data.message + '</h3>',
      icon: 'ti-bell',
      horizontalAlign: 'right',
      verticalAlign: 'bottom',
      type: 'danger',
      timeout: 2000
    })
  },
  401 (err, component) {
    component.$store.dispatch('auth/logout')
    component.$router.push('/login')
    component.$notifications.notify({
      message: '<h3>' + err.data.message + '</h3>',
      icon: 'ti-bell',
      horizontalAlign: 'right',
      verticalAlign: 'bottom',
      type: 'danger',
      timeout: 2000
    })
  },
  402 (err, component) {
    component.$notifications.notify({
      message: '<h3>' + err.data.message + '</h3>',
      icon: 'ti-bell',
      horizontalAlign: 'right',
      verticalAlign: 'bottom',
      type: 'danger',
      timeout: 2000
    })
  },
  403 (err, component) {
    component.$notifications.notify({
      message: '<h3>' + err.data.message + '</h3>',
      icon: 'ti-bell',
      horizontalAlign: 'right',
      verticalAlign: 'bottom',
      type: 'danger',
      timeout: 2000
    })
  },
  404 (err, component) {
    let message = err.data.message ? err.data.message : err.statusText
    component.$notifications.notify({
      message: '<h3>' + message + '</h3>',
      icon: 'ti-bell',
      horizontalAlign: 'right',
      verticalAlign: 'bottom',
      type: 'danger',
      timeout: 2000
    })
  },
  409 (err, component) {
    component.$notifications.notify({
      message: '<h4>' + err.data.message + '</h4>',
      icon: 'ti-bell',
      horizontalAlign: 'right',
      verticalAlign: 'bottom',
      type: 'danger',
      timeout: 2000
    })
  },
  422 (err, component) {
    component.$notifications.notify({
      message: '<h3>' + err.data.message + '</h3>',
      icon: 'ti-bell',
      horizontalAlign: 'right',
      verticalAlign: 'bottom',
      type: 'danger',
      timeout: 2000
    })
  },
  424 (err, component) {
    component.$router.push({name: 'profile'})
  },
  423 (err, component) {
    component.$notifications.notify({
      message: '<h3>' + err.data.message + '</h3>',
      icon: 'ti-bell',
      horizontalAlign: 'right',
      verticalAlign: 'bottom',
      type: 'info',
      timeout: 2000
    })
  },
  429 (err, component) {
    component.$notifications.notify({
      message: '<h3>' + err.data.message + '</h3>',
      icon: 'ti-bell',
      horizontalAlign: 'right',
      verticalAlign: 'bottom',
      type: 'danger',
      timeout: 2000
    })
  },
  500 (err, component) {
    component.$notifications.notify({
      message: '<h3>' + err.data.message + '</h3>',
      icon: 'ti-bell',
      horizontalAlign: 'right',
      verticalAlign: 'bottom',
      type: 'danger',
      timeout: 2000
    })
  }
}

export default response
