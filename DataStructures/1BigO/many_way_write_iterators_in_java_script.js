const ocean = [
  'dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel',
  'squirt', 'darla', 'hank'
]

function findNemo(ocean) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === 'nemo') {
      console.log('we are find nemo')
      break
    }
  }
}

function findNemo2(ocean) {
  ocean.forEach(fish => {
    if (fish === 'nemo') {
      console.log('we are find nemo')
      break
    }
  })
}

function findNemo2(ocean) {
  for (let fish of ocean) {
    if(fish === 'nemo') {
      console.log('we are find nemo')
      break
    }
  }
}
