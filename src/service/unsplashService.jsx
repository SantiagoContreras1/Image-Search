export const buscarResultados = async (valor,page) => {
    const api_key = "hu4n9r2KmJc5_43IWJzfG4NhZneL2qlwgTuPSPXD8J4";
    const url = `https://api.unsplash.com/search/photos/?client_id=${api_key}&query=${valor}&per_page=24&page=${page}`;

    const resp = await fetch(url);
    const data = await resp.json();
    return data;

};