const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
  addTicket,
  newTicket
}

async function addTicket(req, res) {
  req.body.flight = await Flight.findById(req.params.id)
  // await Ticket.create(req.body)
  console.log(req.body)
  res.redirect(`/flights/${req.params.id}`)
}

async function newTicket(req, res) {
  const flight = await Flight.findById(req.params.id)
  res.render('tickets/new', { flight })
}
