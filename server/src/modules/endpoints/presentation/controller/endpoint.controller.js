import { success } from "zod";
import { EndpointDTO } from "../../application/dto/EndpointDTO.js";


export class EndpointController {
    constructor({createEndpoint, getEndpointListing, getEndpoint}) {
        this.createEndpoint = createEndpoint,
        this.getEndpointListing = getEndpointListing,
        this.getEndpoint = getEndpoint
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
            const result = await this.getEndpointListing.execute(req.user.id);

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

    fetchEndpoint = async (req, res, next) => {
        try {
            const endpointId = req.params.endpointId;
            const result = await this.getEndpoint.execute(endpointId);

            return res.status(200).json({
                success: true,
                message: "Endpoint fetched successfully",
                data: {
                    result
                }
            })
        } catch (error) {
            next(error);
        }
    }
};