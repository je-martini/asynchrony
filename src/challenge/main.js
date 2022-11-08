const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCCAoRJGisF-85XQEvZnNxLQ&part=snippet%2Cid&order=date&maxResults=5';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		'X-RapidAPI-Key': 'a69af6a079msh61491286196642ap179fd4jsn250dff004303',
	}
};

async function fetch_data(url_API) {
    const response = await fetch(url_API, options)
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetch_data(API);
        let view = `
        ${videos.items.map(videos => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${videos.snippet.thumbnails.high.url}" alt="${videos.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${videos.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}

        `;
        content.innerHTML = view;
    }catch (error1) {
        console.log(error1)
    }
})();