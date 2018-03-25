var $websiteTitle = $('.website-title');
var $websiteUrl = $('.website-url');
var $enterButton = $('.yellow-button');
var $readButton = $('.read-button');
var $deleteButton = $('.delete-button');
var $cardContainer = $('.cardContainer');

$enterButton.on('click', getInfo);
$deleteButton.on('click', deleteLink);
// $websiteTitle.on('keyup', enableButton);
// $websiteUrl.on('keyup', enableButton);



$('ul').on('click', 'li .read-button', function() {
  console.log(this);
  $(this).toggleClass('read');
  $(this).closest('li').toggleClass('read-background');
});

// $('ul').on('click', 'li .delete-button', function() {
  
// })


function getInfo(event) {
  event.preventDefault();
  isFormComplete();
};

function prependCard(event) {
  $('ul').prepend(`
    <li class="cards">
      <h2>${$websiteTitle.val()}</h2>
      <hr>
      <a href="${$websiteUrl.val()}">${$websiteUrl.val()}</a>
      <hr>
      <button class="readDeleteButtons read-button">Read</button>
      <button class="readDeleteButtons delete-button">Delete</button>
    </li>`);
};

function deleteLink(event) {
  console.log('click');
  event.preventDefault();
};

function isFormComplete() {
  if ($websiteTitle.val() && $websiteUrl.val()) {
    $enterButton.prop('disabled', false);
    isValidUrl($websiteUrl.val());
  } else {
    alert('Please enter title and URL.');
  };
};

function isValidUrl(url) {
  if (/(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url) === false) {
    alert('please enter valid url');
  } else {
    prependCard();
  };
};

