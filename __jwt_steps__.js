/**
 * 1. JWT: secure your api
 * -----------------------
 *          CREATE TOKEN
 * -------------------------
 * 1. client: after user login send user basic info to token
 *
 * 2. in the server side: install npm i jsonwbtoken
 * 3. import jsonwebtoken
 * 4. jwt.sign(payload, secret, {expires})
 * 5. return token to the client side
 *
 * 6. after receving the token store it either httponly cookies or localstorage (second best solution)
 *
 * 7. use a general space onAuthStateChange > AuthProvider
 * ----------------------
 * SEND TOKEN TO SERVER
 * -------------------------
 * for sensitive api call () send authorzation headers
 * {authorization: 'Bearer token'}
 *
 * -----------------------
 * VERYFY TOKEN
 * ----------------------
 *
 * 1.create a function called verifyJWT (middleware)
 * 2. this funciton will have three params: req, res, next
 * 3. First check whether the authorization headers exists
 * 4. if not send 401
 * 5. get the token out of the authorization header
 * 6. call jwt.verify(token, secret, (err, decode))
 * 7. if err => send 401
 * 8. set decoded to the req object so that we can retrieve it later
 * 9. call the next() to go to the next function
 *
 * -------------------------
 * 1. check wether token has the email that matches with the request email
 * */
