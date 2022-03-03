import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()

/* GET users listing. */
router.get('/new', flightsCtrl.new)

router.post('/', flightsCtrl.create)

router.get('/', flightsCtrl.index)

router.delete("/:id", flightsCtrl.delete)

router.get("/:id/edit", flightsCtrl.edit)

router.get('/:id', flightsCtrl.show)

router.put("/:id", flightsCtrl.update)

router.post('/:id/tickets', flightsCtrl.createTicket)

router.post('/:id/meals', flightsCtrl.addToMeal)







export {
  router
}