import { mongoEndpointRepository } from "./infrastructure/repositories/MongoEndpointRepo.js";
import { CreateEndpoint } from "./application/useCases/CreateEndpoint.js";
import { GetEndpointsListing } from "./application/useCases/GetEndpointListing.js";
import { GetEndpoint } from "./application/useCases/getEndpoint.js";
import { EndpointController } from "./presentation/controller/endpoint.controller.js";
import { EndpointResolver } from "../../shared/services/EndpointResolver.js";
import { EndpointQuery } from "./infrastructure/queries/EndpointQuery.js";
import { GetOwnedEndpoint } from "./application/useCases/GetOwnedEndpoint.js";


// query
const endpointQuery = new EndpointQuery();

export const getOwnedEndpoint = new GetOwnedEndpoint(endpointQuery);

const repository = new mongoEndpointRepository();

const createEndpoint = new CreateEndpoint(repository);
const getEndpointListing = new GetEndpointsListing(repository);
const getEndpoint = new GetEndpoint(repository);
export const endpointResolver = new EndpointResolver(repository);


export const endpointController = new EndpointController({createEndpoint, getEndpointListing, getEndpoint});