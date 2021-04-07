const timer = () => {
  const times = process.argv.slice(2).map((e) => Number(e));

  for (const time of times) {
    if (Number.isInteger(time) && time > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }
  }
};
timer();