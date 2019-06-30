export const isArray = function(a) {
    return (!!a) && (a.constructor === Array);
};

export const isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};