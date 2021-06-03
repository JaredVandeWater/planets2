import { galaxiesService } from '../services/galaxiesService'
import BaseController from '../utils/BaseController'

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .post('', this.create)
      .get('/:id', this.getGalaxyById)
      .get('/:galaxyId/planets', this.getGalaxyPlanets)
  }

  async getGalaxyById(req, res, next) {
    try {
      const galaxy = await galaxiesService.getGalaxyById(req.params.id)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const galaxy = await galaxiesService.create(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxyPlanets(req, res, next) {
    try {
      const planets = await galaxiesService.getGalaxyPlanets(req.params.galaxyId)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}
