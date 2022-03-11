

   export const getGifs = async (category)=>{
    
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=H4cigxr4hkx8mxtegppincb1RD7HW9K2&limit=10`
        const resp = await fetch(url);
        const {data} = await resp.json();
        // console.log(data)
        const gifs = data.map (img => {
            return {
                id:img.id,
                title: img.title,
                url: img.images?.downsized_medium.url 
                // el ? lo pones para que si no existe regrese undefined y no un error
            }
        })
        
        return gifs;

    }