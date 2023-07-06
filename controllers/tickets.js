const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
  addTicket,
  newTicket
}

async function addTicket(req, res) {
  req.body.flight = await Flight.findById(req.params.id)
  const tickets = await Ticket.find({})
  tickets.push(req.body)

  await Ticket.save()
  console.log(tickets)
  res.redirect(`/flights/${req.params.id}`)
}

async function newTicket(req, res) {
  const flight = await Flight.findById(req.params.id)
  res.render('tickets/new', { flight })
}
