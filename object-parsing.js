const parseObject = (data, params) => {
    let localData = data;
    let localParams = params.split('.') || [];

    localParams.some((param) => {
        localData = localData[param];
        return localData === undefined;
    });
    return localData;
}

const obj = {'a': {'b': {'c': 'test'}}};

const response = parseObject(obj, 'a.b.c');
const response1 = parseObject(obj, 'a.b.c.d');
console.log(response);
console.log(response1);