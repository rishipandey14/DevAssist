import { EndpointQuery } from "../endpoints/infrastructure/queries/EndpointQuery.js";
import { RequestQuery } from "../request/infrastructure/queries/RequestQuery.js";

import { GetDashboardAnalytics } from "./application/useCase/GetDashboardAnalytics.js";
import { MongoAnalyticsRepository } from "./infrastructure/repositories/MongoAnalyticsRepository.js";
import { AnalyticsController } from "./presentation/controller/analytics.controller.js";

// Queries
const endpointQuery = new EndpointQuery();
const requestQuery = new RequestQuery();

// Repository
const analyticsRepository = new MongoAnalyticsRepository(endpointQuery, requestQuery);

// use Cases
const getDashboardAnalytics = new GetDashboardAnalytics(analyticsRepository);

// Controller
export const analyticsController = new AnalyticsController(getDashboardAnalytics);