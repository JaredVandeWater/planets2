import mongoose from 'mongoose'

export const GalaxySchema = new mongoose.Schema(
  {
    name: { type: String, regex: /[a-z] 0-9/, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
