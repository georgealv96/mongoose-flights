const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
  index,
  new: newFlight,
  create,
  show
}

async function index(req, res) {
  const flights = await Flight.find({})
  res.render('flights/index', { flights })
}

async function newFlight(req, res) {
  res.render('flights/new')
}

async function create(req, res) {
  // if (req.body.departs === '') {
  //   delete req.body.departs
  // }
  try {
    await Flight.create(req.body)
    res.redirect('/flights')
  } catch (err) {
    console.log(err)
    res.redirect('/flights/new')
  }
}

//res.render('flights/show', { flight, tickets })
async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({})
    res.render('flights/show', { flight })
  } catch (err) {
    res.send(err)
  }
}
