import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElement = document.querySelector('.gallery');
let loadingIndicator = document.querySelector('.loading-indicator');

export function renderImages(images) {
  images.forEach(image => {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');

    const imageElement = document.createElement('a');
    imageElement.href = image.largeImageURL;
    imageElement.classList.add('image-link');
    imageElement.innerHTML = `<img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">`;

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    const likesWrapper = document.createElement('div');
    likesWrapper.classList.add('wrapper');
    const likes = document.createElement('h4');
    likes.classList.add('info-item', 'likes');
    likes.textContent = 'Likes';
    const likesValue = document.createElement('p');
    likesValue.classList.add('p-info');
    likesValue.textContent = image.likes;
    likesWrapper.appendChild(likes);
    likesWrapper.appendChild(likesValue);

    const viewsWrapper = document.createElement('div');
    viewsWrapper.classList.add('wrapper');
    const views = document.createElement('h4');
    views.classList.add('info-item', 'views');
    views.textContent = 'Views';
    const viewsValue = document.createElement('p');
    viewsValue.classList.add('p-info');
    viewsValue.textContent = image.views;
    viewsWrapper.appendChild(views);
    viewsWrapper.appendChild(viewsValue);

    const commentsWrapper = document.createElement('div');
    commentsWrapper.classList.add('wrapper');
    const comments = document.createElement('h4');
    comments.classList.add('info-item', 'comments');
    comments.textContent = 'Comments';
    const commentsValue = document.createElement('p');
    commentsValue.classList.add('p-info');
    commentsValue.textContent = image.comments;
    commentsWrapper.appendChild(comments);
    commentsWrapper.appendChild(commentsValue);

    const downloadsWrapper = document.createElement('div');
    downloadsWrapper.classList.add('wrapper');
    const downloads = document.createElement('h4');
    downloads.classList.add('info-item', 'downloads');
    downloads.textContent = 'Downloads';
    const downloadsValue = document.createElement('p');
    downloadsValue.classList.add('p-info');
    downloadsValue.textContent = image.downloads;
    downloadsWrapper.appendChild(downloads);
    downloadsWrapper.appendChild(downloadsValue);

    infoContainer.appendChild(likesWrapper);
    infoContainer.appendChild(viewsWrapper);
    infoContainer.appendChild(commentsWrapper);
    infoContainer.appendChild(downloadsWrapper);

    imageCard.appendChild(imageElement);
    imageCard.appendChild(infoContainer);
    galleryElement.appendChild(imageCard);
  });

  hideLoadingIndicator();

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function showLoadingIndicator() {
  if (!loadingIndicator) {
    loadingIndicator = document.createElement('div');
    loadingIndicator.classList.add('loading-indicator');
    loadingIndicator.textContent = 'Loading...';
    document.body.appendChild(loadingIndicator);
  }
}

export function hideLoadingIndicator() {
  if (loadingIndicator) {
    loadingIndicator.remove();
    loadingIndicator = null;
  }
}

export function showMessage(message) {}
