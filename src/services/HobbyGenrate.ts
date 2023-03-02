import { hobby } from "../constants/hobby";

export const rendomHobby = () => {
    let rendomHobbyNumber = Math.floor(Math.random() * hobby?.length + 1);
    let hobbyData: any = {};
    let hobbyList: Array<object | any> | any = [];

    function recursion() {
        let hobbyListRendom = Math.floor(Math.random() * rendomHobbyNumber);
        if (hobbyData[hobbyListRendom]) {
            recursion();
        } else {
            hobbyData[hobbyListRendom] = 'repeat';
            hobbyList.push(hobby[hobbyListRendom]);
        }
    }
    const rendomHobbyGenrate = () => {
        for (let i = 0; i < rendomHobbyNumber; i++) {
            recursion();
        }
    };
    rendomHobbyGenrate();
    return hobbyList
}