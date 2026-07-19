import { success } from "zod";
import { EndpointDTO } from "../../application/dto/EndpointDTO.js";


export class EndpointController {
    constructor({createEndpoint, GetEndpointListing}) {
        this.createEndpoint = createEndpoint,
        this.GetEndpointListing = GetEndpointListing
    }

    create = async (req, res, next) => {
        try {
            const dto = new EndpointDTO(req.body);

            const result = await this.createEndpoint.execute(req.user.id, dto);

            return res.status(201).json({
                success: true,
                message: "Endpoint created successfully",
                data: {
                    result
                }
            })
        } catch (error) {
            next(error);
        }
    }

    endpointListing = async (req, res, next) => {
        try {
            const result = await this.GetEndpointListing.execute(req.user.id);

            return res.status(200).json({
                success: true,
                message: "Endpoints fetched successfully",
                data: {
                    result
                }
            })
        } catch (error) {
            next(error);
        }
    }
};