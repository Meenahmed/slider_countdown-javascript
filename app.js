const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekdays = [
  'Sunday',
  'Monday',
  'Tueday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const nikkahDate = document.querySelector('.nikkah-date');
const dDay = document.querySelector('.d-day');
const items = document.querySelectorAll('.d-day-format h4');

// wedding date
let weddingDate = new Date(2021, 11, 18, 12, 10, 00);

// Extracting the date one after another
const year = weddingDate.getFullYear();
let month = weddingDate.getMonth();
month = months[month];
const hours = weddingDate.getHours();
const minutes = weddingDate.getMinutes();
const date = weddingDate.getDate();
const weekday = weekdays[weddingDate.getDay()];

// add the extracted date to h4 (nikkah-date) in html
nikkahDate.textContent = `Save the Date: "${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

/*
===========================
Calculating the remaining time
===========================
*/
// future time in ms
const weddingTime = weddingDate.getTime();

// function for remaining time
function getRemainingTime() {
  // current time in ms
  const today = new Date().getTime();

  //   difference between the current time and wedding time
  const timeDiff = weddingTime - today;
  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1day = 24hrs

  // values in ms
  const oneSec = 1000;
  const oneMinute = 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;

  //   calculate all values left
  let days = Math.floor(timeDiff / oneDay);
  let hours = Math.floor((timeDiff % oneDay) / oneHour);
  let minutes = Math.floor((timeDiff % oneHour) / oneMinute);
  let seconds = Math.floor((timeDiff % oneMinute) / oneSec);

  //   set values array:
  const values = [days, hours, minutes, seconds];

  //function to add 0 at the front if values are less than 10
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  // Display the arrays to their respective divs
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (timeDiff < 0) {
    clearInterval(countdown);
    dDay.innerHTML = `<p class="nikkah-day">Hurray, today is the Day. May Allah bless the new Couple</p>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

/*
================================================
Images Display
================================================
*/

// create an array of images
const images = [
  'picture1.jpg',
  'picture2.jpg',
  'picture3.jpg',
  'picture4.jpg',
  'picture5.jpg',
  'picture6.jpg',
  'picture7.jpg',
  'picture8.jpg',
];

// select the classes to work with
const nikkahphoto = document.getElementById('nikkah-photo');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set a starting point
let currentImg = 0;

// prev image
prevBtn.addEventListener('click', function () {
  currentImg--;
  if (currentImg < 0) {
    currentImg = images.length - 1;
  }
  return showImage();
});

// next image
nextBtn.addEventListener('click', function () {
  currentImg++;
  if (currentImg > images.length - 1) {
    currentImg = 0;
  }
  return showImage();
});

// show image based on the picture array
function showImage() {
  return nikkahphoto.setAttribute('src', 'images/' + images[currentImg]);
}
