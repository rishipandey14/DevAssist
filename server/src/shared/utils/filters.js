export const getRequestFilters = (query) => {
    const filters = {};

    if(query.method) filters.method = query.method.toUpperCase();
    if(query.contentType) filters.contentType = query.contentType;
    if(query.ip) filters.ip = query.ip;
    
    return filters;
};
