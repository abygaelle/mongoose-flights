import { Flight } from '../models/flight.js'
import { Meal } from "../models/meal.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight"
  })
}

function create(req, res){
  for (let key in req.body){
    if(req.body[key] === '') delete req.body[key]
  }
  const flight = new Flight(req.body)

  flight.save(function(err){
    if (err) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render('flights/index', {
      flights: flights,
      error: error,
      title: 'All Flights'
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('meals')
  .exec(function (err, flight) {
    Meal.find({_id: {$nin: flight.meals}}, function (err, meals) {
      res.render("flights/show", {
        flight,
        title: "Flight Detail",
        meals,
      })
    })
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function (err, flight) {
    res.redirect('/flights')
  })
}


function createTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    flight.tickets.push(req.body)
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function addToMeal(req,res){
  Flight.findById(req.params.id, function(err, flight) {
    flight.meals.push(req.body.mealId)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}


export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  createTicket,
  addToMeal,
}
