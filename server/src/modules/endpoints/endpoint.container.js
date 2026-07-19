import { mongoEndpointRepository } from "./infrastructure/repositories/MongoEndpointRepo.js";
import { CreateEndpoint } from "./application/useCases/CreateEndpoint.js";
import { GetEndpoints } from "./application/useCases/GetMyEndpoint.js";
import { EndpointController } from "./presentation/controller/endpoint.controller.js";


const repository = new mongoEndpointRepository();

const createEndpoint = new CreateEndpoint(repository);
const GetEndpointListing = new GetEndpoints(repository);


export const endpointController = new EndpointController({createEndpoint, GetEndpointListing});