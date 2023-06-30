const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ['American', 'Southwest', 'United']
    },
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
      type: Number,
      min: 10,
      max: 9999
    }
    // departs: Date
  },
  {
    timestamps: true
  }
)

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema)
