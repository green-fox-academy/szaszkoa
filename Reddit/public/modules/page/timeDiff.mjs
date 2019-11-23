'use strict'

// calculating elapsed time between now() and submission date
const timeDiffCalculator = (time) => {
  let elapsedTime = Math.floor((Date.now() / 1000) - time);
  let days = Math.floor(elapsedTime / (24 * 60 * 60)); // 86400s in a day
  let hours = Math.floor((elapsedTime - (days * 86400)) / (60 * 60)); // 3600s in an hour
  let minutes = Math.floor((elapsedTime - ((days * 86400) + (hours * 3600))) / 60);

  let postIsVeryRecent = minutes < 1 ? 'Submitted just now' : false;
  let timeDiffText = ''

  days != 0 ? timeDiffText += `${days} ${days > 1 ? 'days' : 'day'}, ` : timeDiffText += '';
  hours != 0 ? timeDiffText += `${hours} ${hours > 1 ? 'hours' : 'hour'}, ` : timeDiffText += '';
  minutes != 0 ? timeDiffText += `${minutes} ${minutes > 1 ? 'minutes' : 'minute'}` : timeDiffText += '';

  return postIsVeryRecent === false ? `Submitted ${timeDiffText} ago` : postIsVeryRecent;
};

export { timeDiffCalculator };