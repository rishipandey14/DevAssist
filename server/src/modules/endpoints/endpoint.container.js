import { mongoEndpointRepository } from "./infrastructure/repositories/MongoEndpointRepo.js";
import { CreateEndpoint } from "./application/useCases/CreateEndpoint.js";
import { GetEndpointsListing } from "./application/useCases/GetEndpointListing.js";
import { GetEndpoint } from "./application/useCases/getEndpoint.js";
import { EndpointController } from "./presentation/controller/endpoint.controller.js";


const repository = new mongoEndpointRepository();

const createEndpoint = new CreateEndpoint(repository);
const getEndpointListing = new GetEndpointsListing(repository);
const getEndpoint = new GetEndpoint(repository);


export const endpointController = new EndpointController({createEndpoint, getEndpointListing, getEndpoint});