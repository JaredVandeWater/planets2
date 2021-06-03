import ValueSchema from '../models/Value'
import mongoose from 'mongoose'
import { GalaxySchema } from '../models/Galaxy'
import { PlanetSchema } from '../models/Planet'

class DbContext {
  Galaxy = mongoose.model('Galaxy', GalaxySchema);

  Planets = mongoose.model('Planet', PlanetSchema);
  Values = mongoose.model('Value', ValueSchema);
}

export const dbContext = new DbContext()
