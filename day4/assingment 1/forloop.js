for (var i = 1; i <= 100; i++) {
    var message = '';
    if (i%3 === 0) message += 'fizz';
    if (i%5 === 0) message += 'buzz';
    console.log(message || i);
  }