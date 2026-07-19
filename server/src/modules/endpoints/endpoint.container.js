import { mongoEndpointRepository } from "./infrastructure/repositories/MongoEndpointRepo.js";
import { CreateEndpoint } from "./application/useCases/CreateEndpoint.js";
import { EndpointController } from "./presentation/controller/endpoint.controller.js";


const repository = new mongoEndpointRepository();

const createEndpoint = new CreateEndpoint(repository);


export const endpointController = new EndpointController({createEndpoint});