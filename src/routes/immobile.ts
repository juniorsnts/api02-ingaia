import express from 'express';
import immobileController from '../controllers/immobileController';
const router = express.Router();

/**
 * @swagger
 * /immobile/calculate_immobile:
 *   post:
 *     tags:
 *       - immobile
 *     summary: Calculate meter square
 *     parameters:
 *       - name: quantity_meter_square
 *         description: value meter square for calculate
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             quantity_meter_square:
 *               type: number
 *               example: 5000
 *     responses:
 *       200:
 *         description: Value Meter Square
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     value_immobile:
 *                       type: number
 *                       description: value calculate with meter square
 *                       example: 40000
*/

router.post('/calculate_immobile', immobileController.post);

export default router;