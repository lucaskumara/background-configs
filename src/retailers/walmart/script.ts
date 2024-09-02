import { StartData } from "../../utils/models/startdata";
import { applyConverters } from "../../utils/decorators";
import { CollectOrdersConverter, StartDataConverter } from "../../utils/converters";
import { Logger } from "../../utils/logging";

export class Walmart {

    @applyConverters([new StartDataConverter(), new CollectOrdersConverter()])
    static async collectOrderDetails(startData: StartData, collectOrders: boolean): Promise<Order[]> {
        // To stop eslint from complaining there is no await
        await new Promise(resolve => setTimeout(resolve, 1000));

        Logger.debug(JSON.stringify(startData));
        Logger.debug(JSON.stringify(collectOrders));

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