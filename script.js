console.log('testing')

var websiteTitle = document.querySelector('.website-title');
var websiteUrl = document.querySelector('.website-url');
var enterButton = document.querySelector('.yellow-button');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');


enterButton.addEventListener('click', checkFields);
readButton.addEventListener('click', markAsRead);
deleteButton.addEventListener('click', deleteLink);

function checkFields() {
  console.log('click');
  event.preventDefault(checkFields);
}

function markAsRead() {
  console.log('click');
  event.preventDefault(markAsRead);
}

function deleteLink() {
  console.log('click');
  event.preventDefault(deleteLink);
}

