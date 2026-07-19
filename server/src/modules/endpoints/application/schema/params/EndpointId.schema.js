import { z } from "zod";

export const EndpointIdSchema = z.object({
    endpointId : z
            .string()
            .length(24)
});