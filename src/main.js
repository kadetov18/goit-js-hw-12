// В файлі main.js
import { searchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showLoadingIndicator,
  hideLoadingIndicator,
  showMessage,
} from './js/render-functions.js';

const form = document.querySelector('form');
const searchInput = document.querySelector('input[type="search"]');
const loadMoreBtn = document.querySelector('.load-more-btn');

let currentPage = 1;
let currentKeyword = '';

form.addEventListener('submit', async event => {
  event.preventDefault();
  const keyword = searchInput.value.trim();
  if (keyword === '') {
    showMessage('Please enter a search keyword.');
    return;
  }

  currentKeyword = keyword;
  currentPage = 1;
  loadMoreBtn.style.display = 'none';
  showLoadingIndicator();
  try {
    const images = await searchImages(keyword);
    hideLoadingIndicator();

    if (images.length === 0) {
      showMessage(
        `Sorry, there are no images matching your search query. Please try again!`
      );
    } else {
      renderImages(images);
      loadMoreBtn.style.display = 'block';
    }
  } catch (error) {
    hideLoadingIndicator();
    showMessage(
      'An error occurred while fetching images. Please try again later.'
    );
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage++;
  showLoadingIndicator();
  try {
    const images = await searchImages(currentKeyword, currentPage);
    hideLoadingIndicator();
    setTimeout(() => {
      const card = document.querySelector('.image-card');
      const cardHeight = card.getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 3, // Прокручуємо на дві висоти карточки галереї
        behavior: 'smooth', // Плавна анімація прокручування
      });
    }, 300);

    if (images.length === 0) {
      showMessage("We're sorry, but you've reached the end of search results.");
      loadMoreBtn.style.display = 'none';
    } else {
      renderImages(images);
    }
  } catch (error) {
    hideLoadingIndicator();
    showMessage(
      'An error occurred while fetching more images. Please try again later.'
    );
  }
});
