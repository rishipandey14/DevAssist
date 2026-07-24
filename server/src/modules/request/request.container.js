// import { EndpointResolver } from "../../shared/services/EndpointResolver.js";
import { GetOwnedEndpoint } from "../endpoints/application/useCases/GetOwnedEndpoint.js";
import { endpointResolver } from "../endpoints/endpoint.container.js";
import { CaptureRequest } from "./application/useCases/CaptureRequest.js";
import { GetEndpointRequests } from "./application/useCases/GetEndpointRequests.js";
import { GetRequest } from "./application/useCases/GetRequest.js";
import { MongoRequestRepository } from "./infrastructure/repositories/MongoRequestRepository.js";
import { RequestController } from "./presentation/controller/request.controller.js";
import { EndpointQuery } from "../endpoints/infrastructure/queries/EndpointQuery.js";


// queries
const endpointQuery = new EndpointQuery();


const getOwnedEndpoint = new GetOwnedEndpoint(endpointQuery);


const repository = new MongoRequestRepository();

const captureRequest = new CaptureRequest(repository);
const getEndpointRequests = new GetEndpointRequests(repository, getOwnedEndpoint);
const getRequest = new GetRequest(repository);

export const requestController = new RequestController({
    captureRequest,
    endpointResolver,
    getEndpointRequests,
    getRequest,
})