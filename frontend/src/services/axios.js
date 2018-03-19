import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://dev.nodepub.com/api'
})

const request = {
  _getGuestHeaders: {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Language': 'ru'
    }
  },
  _getAuthHeaders () {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Language': 'ru',
        'Authorization': 'Bearer ' + localStorage.getItem('nodepubToken')
      }
    }
  },
  register (creds) {
    return instance.post('/users', creds, this._getGuestHeaders)
  },
  login (creds) {
    creds.grant_type = 'password'
    creds.client_id = '1'
    creds.client_secret = 'Q6nU8HHpUXb0xfJJaNc4G88jmBwFtWpFfpVy4VdR'
    creds.scope = '*'
    return instance.post('/users/auth', creds, this._getGuestHeaders)
  },
  login2fa (creds) {
    return instance.post('/users/auth/twofa', creds, this._getGuestHeaders)
  },
  getUser () {
    return instance.get('/users', this._getAuthHeaders())
  },
  updateUser (creds) {
    return instance.patch('/users', creds, this._getAuthHeaders())
  },
  confirmEmail (token) {
    return instance.get('/users/email/confirm/' + token)
  },
  getTwoFa () {
    return instance.get('/users/twofa', this._getAuthHeaders())
  },
  getUserActions () {
    return instance.get('/users/actions', this._getAuthHeaders())
  },
  activateTwoFa (creds) {
    return instance.post('/users/twofa', creds, this._getAuthHeaders())
  },
  deactivateTwoFa (creds) {
    return instance.delete('/users/twofa',
      {
        headers: this._getAuthHeaders().headers,
        data: creds
      })
  },
  checkCodeTwoFa (creds) {
    return instance.post('/users/twofa/auth', creds, this._getAuthHeaders())
  },
  forgotPassword (creds) {
    return instance.post('/users/password', creds, this._getGuestHeaders)
  },
  resetPassword (creds) {
    return instance.patch('/users/password', creds, this._getGuestHeaders)
  }
}
export default request
