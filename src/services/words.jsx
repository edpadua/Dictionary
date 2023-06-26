import instance from "../common/config/api"

const wordsService = {
    find: async (word) => {

        
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
        console.log("url", url);
        const resp = await instance.get(url);
        console.log("data", resp.data[0])

        return resp.data;
    }
}

export default wordsService;