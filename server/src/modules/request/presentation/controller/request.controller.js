import { APIError } from "../../../../config/error.js";

export class RequestController {
    constructor({captureRequest, endpointResolver, getEndpointRequests, getRequest}) {
        this.endpointResolver = endpointResolver;
        this.captureRequest = captureRequest;
        this.getEndpointRequests = getEndpointRequests;
        this.getRequest = getRequest;
    }

    capture = async (req, res, next) => {
        try {
            const endpoint = await this.endpointResolver.resolveBySlug(req.params.slug);

            if(!endpoint) throw new APIError("Endpoint not found", 404);

            await this.captureRequest.execute({
                endpointId: endpoint._id,
                method: req.method,
                path: req.path,
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

    endpointRequests = async (req, res, next) => {
        try {
            const requests = await this.getEndpointRequests.execute(req.params.endpointId);

            return res.status(200).json({
                success: true,
                data: requests
            })
        } catch (error) {
            next(error);
        }
    }

    getRequestInfo = async (req, res, next) => {
        try {
            const request = await this.getRequest.execute(req.params.requestId);

            return res.status(200).json({
                success: true,
                data: request
            });
        } catch (error) {
            next(error);
        }
    }
};