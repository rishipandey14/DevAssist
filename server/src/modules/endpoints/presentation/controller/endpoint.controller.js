import { EndpointDTO } from "../../application/dto/EndpointDTO.js";


export class EndpointController {
    constructor({createEndpoint}) {
        this.createEndpoint = createEndpoint
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
};