import { dbContext } from '../db/DbContext'

class PlanetService {
  async getPlanetById(id) {
    return await dbContext.Planets.findById(id)
  }

  async create(planetData) {
    return await dbContext.Planets.create(planetData)
  }
}

export const planetService = new PlanetService()
