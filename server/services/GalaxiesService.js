import { dbContext } from '../db/DbContext'

class GalaxiesService {
  async getGalaxyById(id) {
    return await dbContext.Galaxy.findById(id).populate
  }

  async create(galaxyData) {
    return await dbContext.Galaxy.create(galaxyData)
  }

  // this had to be galaxyId it couldn't just be id, weird
  async getGalaxyPlanets(galaxyId) {
    return await dbContext.Planets.find({ galaxyId })
  }
}

export const galaxiesService = new GalaxiesService()
