import mongoose from 'mongoose'

export const PlanetSchema = new mongoose.Schema(
  {
    name: { type: String, regex: /[a-z] 0-9/, required: true },
    galaxyId: { type: mongoose.Schema.Types.ObjectId, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
