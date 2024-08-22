export class Walmart {

    static async collectOrderDetails(): Promise<Order[]> {
        // To stop eslint from complaining there is no await
        await new Promise(resolve => setTimeout(resolve, 1000));

        return [
            { orderId: "123" },
            { orderId: "456" }
        ];
    }

    static async collectMembershipDetails(): Promise<Membership> {
        // To stop eslint from complaining there is no await
        await new Promise(resolve => setTimeout(resolve, 1000));

        return {
            startDate: new Date(),
            endDate: new Date("Jan 1, 2025")
        };
    }

}

interface Order {
    orderId: string
}

interface Membership {
    startDate: Date,
    endDate: Date
}