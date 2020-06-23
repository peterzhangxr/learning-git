(async function() {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('4'))
        //throw new Error('4')
      }, 500)
      
    })
  } catch(err) {
    console.log('error', err)
  }
})()