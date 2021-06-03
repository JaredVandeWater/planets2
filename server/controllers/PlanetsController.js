import { planetService } from '../services/PlanetsService'
import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('/:id', this.getPlanetById)
      .post('', this.create)
  }

  async getPlanetById(req, res, next) {
    try {
      const planet = await planetService.getPlanetById(req.params.id)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const planet = await planetService.create(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}
