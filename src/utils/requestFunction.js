// const baseUrl = 'https://test-dev.motiw.ru/rest/';
const baseUrl = 'http://localhost:4000/rest/';
// let token; //как хранить?



export const login = async (login, password) => {
    const responce = await fetch(`${baseUrl}login?login=${login}&pass=${password}`);
    const data = await responce.json();
    return data.success;
}


export const getGroupList = async (id) => {
    const responce = await fetch(`${baseUrl}getGroupList?groupType=folder&parentid=${id}`);
    const data = await responce.json();
    return data.result.data;
}

export const getObjectList = async (id) => {
    const responce = await fetch(`${baseUrl}getObjectList?groupType=folder&groupId=${id}`);
    const data = await responce.json();
    return data.result.data;
}

export const getTasksSystemInfo = async (id) => {
    const responce = await fetch(`${baseUrl}getTasksSystemInfo?taskIds[]=${id}`);
    const data = await responce.json();
    return data.result;
}

