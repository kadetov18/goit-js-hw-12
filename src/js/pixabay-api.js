// В файлі pixabay-api.js
import axios from 'axios'; // доданий імпорт Axios

const API_KEY = '43320774-2e32212a247c0a8af917c24eb';

export async function searchImages(keyword, page = 1, perPage = 12) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    keyword
  )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  try {
    const response = await axios.get(url);
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
