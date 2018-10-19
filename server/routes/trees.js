module.exports = {
  getTrees: (req, res) => {
    let response = {
      status: 'ok'
    }

    let headers = {
      'Content-Type': 'application/json'
    }

    res.set(headers)
    res.status(200)
    res.write(JSON.stringify(response))
    res.end()
  }
}
