/* eslint-env jest */

const request = require('supertest')

describe('SERVER -> GET /api/trees -> getTrees()..', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).get('/api/trees')
  })

  it('expect res to have property status...', () => {
    expect(res).toHaveProperty('status')
  })

  it('expect res.statusCode to equal 200...', () => {
    expect(res.statusCode).toEqual(200)
  })

  it('expect res.body to have property status...', async () => {
    expect(res.body).toHaveProperty('status')
  })

  it('expect res.body.status to equal "ok"...', async () => {
    expect(res.body.status).toBe('ok')
  })
})
