var $websiteTitle = $('.website-title');
var $websiteUrl = $('.website-url');
var $enterButton = $('.yellow-button');
var $readButton = $('.read-button');
var $deleteButton = $('.delete-button');
var $cardContainer = $('.cardContainer');
var $totalBookmarks = $('.card-count');
var $readCountCatcher = $('.read-count');
var $unreadCountCatcher = $('.unread-count');
var $cardCount = 0;
var $readCount = 0;
var $unreadCount = 0;

$enterButton.on('click', isFormComplete);
// $deleteButton.on('click', deleteLink);
$websiteTitle.on('keyup', enableButton);
$websiteUrl.on('keyup', enableButton);
$websiteTitle.focus();

//name this function and pull it out
$('ul').on('click', 'li .read-button', function() {
  $(this).toggleClass('read unread-cards');
  $(this).closest('li').toggleClass('read-background');
  var $readCount = $('.read').length;
  $readCountCatcher.text('Read: ' + $readCount);
  $unreadCountCatcher.text('Unread: ' + ($cardCount - $readCount));
});


//name this function and pull it out
$('ul').on('click', 'li .delete-button', function() {
  $(this).closest('li').remove();
  $cardCount--;
  var $readCount = $('.read').length;
  $totalBookmarks.text('Total Bookmark= ' + $cardCount);
  $unreadCountCatcher.text('Unread: ' + ($cardCount - $readCount));
  $readCountCatcher.text('Read: ' + $readCount);
});

// Add cardCounting function and call it on button clicks (refactor):
// function cardCount() {
//   var $readCount = $('.read').length;
//   $totalBookmarks.text('Total Bookmark= ' + $cardCount);
//   $unreadCountCatcher.text('Unread: ' + ($cardCount - $readCount));
//   $readCountCatcher.text('Read: ' + $readCount);
// }

// Delete this: (changed event listener to jump straight to isFormComplete instead):
// function getInfo(event) {
//   event.preventDefault();
//   isFormComplete();
// };

// Delete this ?:
// function deleteLink(event) {
//   console.log('click');
//   event.preventDefault();
// };

function enableButton() {
  if ($websiteTitle.val() || $websiteUrl.val()) {
    $enterButton.prop('disabled', false);
  };
};

function isFormComplete(event) {
   event.preventDefault();
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

function prependCard(event) {
  $('ul').prepend(`
    <li class="cards">
    <h2>${$websiteTitle.val()}</h2>
    <hr>
    <a target='_blank' href="http://${$websiteUrl.val()}">${$websiteUrl.val()}</a>
    <hr>
    <button class="readDeleteButtons read-button">Read</button>
    <button class="readDeleteButtons delete-button">Delete</button>
    </li>`);
  $cardCount++
  $totalBookmarks.text('Total Bookmark= ' + $cardCount);
  $unreadCountCatcher.text('Unread: ' + ($cardCount - $('.read').length));
};

