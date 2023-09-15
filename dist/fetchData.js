export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error('Erro' + response.status);
        const json = await response.json();
        return json;
    }
    catch (erro) {
        return null;
    }
}
//# sourceMappingURL=fetchData.js.map