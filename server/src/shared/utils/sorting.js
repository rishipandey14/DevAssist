const ALLOWED_SORT_FIELDS = [
    "receivedAt",
    "bodySize",
    "updatedAt"
]

export const getSorting = (query) => {
    const field = ALLOWED_SORT_FIELDS.includes(query.sort)
        ? query.sort : "receivedAt" ;
    
    const order = query.order === "asc" ? 1 : -1;

    return {
        [field] : order
    }
}