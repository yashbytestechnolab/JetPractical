import AsyncStorage from "@react-native-async-storage/async-storage";

export const AsyncStorageSetValue = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) { }
};

/**npm insta
 * Get Value From Local Storage
 * @param key
 */
export const AsyncStorageGetValue = async (key: string) => {
    try {
        let jsonValue = await AsyncStorage.getItem(key);
        if (jsonValue !== null) {
            jsonValue = JSON.parse(jsonValue);
            return jsonValue;
        }
        return null;
    } catch (e) { }
};