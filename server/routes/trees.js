module.exports = {
  getTrees: (req, res) => {
    let response = {
      status: 'ok'
    }

    res.status(200)
    res.write(JSON.stringify(response))
    res.end()
  }
}
