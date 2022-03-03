import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'



router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.get('/', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)
router.delete('/:id', flightsCtrl.delete)
router.get("/:id/edit", flightsCtrl.edit)
router.put("/:id", flightsCtrl.update)
router.post('/:id/tickets', flightsCtrl.createTicket)

export {
  router
}
