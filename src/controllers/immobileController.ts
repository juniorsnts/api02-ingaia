import express from 'express';
import { IBodyCalculate } from '../interfaces/calculate_body';
import { ISquareMeter } from '../interfaces/square_meter';
import api from '../services/api';


const post = async (req: express.Request, res: express.Response) => {
    const response: IBodyCalculate = req.body;
    const { quantity_meter_square } = response;

    const calculateMeter = (valueForMeter: number): number => {
        return quantity_meter_square * valueForMeter;
    };

    if (quantity_meter_square >= 10 && quantity_meter_square <= 10000) {
        try {
            const { data } = await api.get<ISquareMeter>('/meter/value_square');
            const { value_meter_square } = data;
            const value_immobile = calculateMeter(value_meter_square);
            return res.status(200).send({ value_immobile });
        } catch (err) {
            return res.status(400).send({ error: 'api2 not returned' });
        }
    }
    return res.status(400).send({ error: 'Limite minimo 10 e máximo 10.000' });
}

export default { post };