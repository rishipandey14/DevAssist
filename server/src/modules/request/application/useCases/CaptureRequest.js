import { Request } from "../../domain/entity/Request.js";


export class CaptureRequest {
    constructor(requestRepository) {
        this.requestRepository = requestRepository
    }

    async execute(data) {
        const request = new Request(data);

        return await this.requestRepository.captureRequest(request);
    }
};