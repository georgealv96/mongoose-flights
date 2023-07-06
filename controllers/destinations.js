const Flight = require('../models/flight')

module.exports = {
  create
}

async function create(req, res) {
  try {
    const flight = await Flight.findById(req.params.id)

    // Add the new destinations in ascending order
    if (flight.destinations.length < 1) {
      flight.destinations.push(req.body)
    } else {
      for (let i = 0; i < flight.destinations.length; i++) {
        if (new Date(req.body.arrival) < flight.destinations[i].arrival) {
          flight.destinations.splice(i, 0, req.body)
          break
        } else if (
          new Date(req.body.arrival) >= flight.destinations[i].arrival &&
          i === flight.destinations.length - 1
        ) {
          flight.destinations.push(req.body)
          break
        }
      }
    }
    await flight.save()
    res.redirect(`/flights/${req.params.id}`)
  } catch (err) {
    res.send(err)
  }
}
