export const isArray = function(a) {
    return (!!a) && (a.constructor === Array);
};

export const isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};

export const matchesColorHex = function(hex) {
    let re = /#[0-9a-fA-F]{6}/;
    return re.test(hex)
};