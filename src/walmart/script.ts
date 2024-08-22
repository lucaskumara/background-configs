export class Walmart {

    static async collectOrderDetails(): Promise<Order[]> {
        return [
            { orderId: "123" },
            { orderId: "456" }
        ];
    }

    static async collectMembershipDetails(): Promise<Membership> {
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