import { Walmart } from '../../src/walmart/script';

describe('Walmart', function () {

    describe('collectOrderDetails', function () {
        it('should return an expected value', async function () {
            const result = await Walmart.collectOrderDetails();

            expect(result).toStrictEqual([
                { orderId: '123' },
                { orderId: '456' }
            ]);
        });
    });

    describe('collectMembershipDetails', function () {
        it('should return an object with a start date and end date', async function () {
            const result = await Walmart.collectMembershipDetails();

            expect(typeof result).toBe('object');

            expect(result).toHaveProperty('startDate');
            expect(result).toHaveProperty('endDate');

            expect(result.startDate).toBeInstanceOf(Date);
            expect(result.endDate).toBeInstanceOf(Date);
        });
    });

});