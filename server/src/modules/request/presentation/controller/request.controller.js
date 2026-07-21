import { APIError } from "../../../../config/error.js";

export class RequestController {
    constructor({captureRequest, endpointResolver,}) {
        this.endpointResolver = endpointResolver;
        this.captureRequest = captureRequest;
    }

    capture = async (req, res, next) => {
        try {
            const endpoint = await this.endpointResolver.resolveBySlug(req.params.slug);

            if(!endpoint) throw new APIError("Endpoint not found", 404);

            await this.captureRequest.execute({
                endpointId: endpoint._id,
                method: req.method,
                path: req.originalUrl,
                headers: req.headers,
                query: req.query,
                body: req.body,
                rawBody: req.rawBody,
                ip: req.ip,
                contentType: req.get("content-type"),
                userAgent: req.get("user-agent"),
                bodySize: Buffer.byteLength(req.rawBody || ""),
            });

            return res.status(201).json({
                success: true,
                message: "Request captured Successfully"
            })
        } catch (error) {
            next(error);
        }
    }
};