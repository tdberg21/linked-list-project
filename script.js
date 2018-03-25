var $websiteTitle = $('.website-title');
var $websiteUrl = $('.website-url');
var $enterButton = $('.yellow-button');
var $readButton = $('.read-button');
var $deleteButton = $('.delete-button');
var $cardContainer = $('.cardContainer');
var $handleClick = function() {
  console.log( 'something was clicked' );
};

$enterButton.on('click', getInfo);
$readButton.on('click', read);
$deleteButton.on('click', deleteLink);
// $websiteTitle.on('keyup', enableButton);
// $websiteUrl.on('keyup', enableButton);

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

function read(event) {
  console.log('click');
  $('li').toggleClass('read');
  event.preventDefault();
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

