console.log('testing')

var websiteTitle = document.querySelector('.website-title');
var websiteUrl = document.querySelector('.website-url');
var enterButton = document.querySelector('.yellow-button');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');
var cardContainer = document.querySelector('.cardContainer');

console.log(typeof websiteTitle.value);

enterButton.addEventListener('click', appendCard);
readButton.addEventListener('click', markAsRead);
deleteButton.addEventListener('click', deleteLink);
websiteTitle.addEventListener('keyup', enableButton);
websiteUrl.addEventListener('keyup', enableButton);

function markAsRead() {
  console.log('click');
  event.preventDefault(markAsRead);
};

function deleteLink() {
  console.log('click');
  event.preventDefault(deleteLink);
};

function enableButton() {
  if (websiteTitle.value === '' || websiteUrl.value === '') {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  };
};

