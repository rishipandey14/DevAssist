// import { EndpointResolver } from "../../shared/services/EndpointResolver.js";
import { endpointResolver } from "../endpoints/endpoint.container.js";
import { CaptureRequest } from "./application/useCases/CaptureRequest.js";
import { MongoRequestRepository } from "./infrastructure/repositories/MongoRequestRepository.js";
import { RequestController } from "./presentation/controller/request.controller.js";

const repository = new MongoRequestRepository();

const captureRequest = new CaptureRequest(repository);

export const requestController = new RequestController({
    captureRequest,
    endpointResolver,
})