const fetchApi =async (url:string) => {
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            return null;
        });
}

export default fetchApi;
