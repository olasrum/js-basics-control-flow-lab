function scuberGreetingForFeet(value){
  let result;
  if (value < 400) {
    result = 'This one is on me!';
  } else if (value > 2000 && value < 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if (value > 2500) {
    result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity(city){
  let comment;
  city === 'NYC' ? (comment = 'Ok, sounds good.') : (comment = 'No go.');
  return comment;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case 'generous':
        response = 'Thank you so much.';
        break;
    case 'not as generous':
        response = 'Thank you.';
        break;
    default:
        response = 'Bye.';
        break;
  }
  return response;
}