import { ISquareMeter } from "../src/interfaces/square_meter";
import api from "../src/services/api";

describe('teste na api de retorno do metro quadrado', () => {

    it('valor do metro quadrado no valor de 40', async () => {
        const { data } = await api.get<ISquareMeter>('/meter/value_square');
        expect(data.value_meter_square).toEqual(40);
    });

    it('status igual a 200', async () => {
        const { status } = await api.get<ISquareMeter>('/meter/value_square');
        expect(status).toEqual(200);
    });

    it('calculo de valor com base na api', async () => {
        const { data } = await api.get<ISquareMeter>('/meter/value_square');
        const calculateMeter = (valueForMeter: number): number => {
            return 1000 * valueForMeter;
        };
        expect(calculateMeter(data.value_meter_square)).toEqual(40000); 
    });

});