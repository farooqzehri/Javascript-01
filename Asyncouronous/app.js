function getData(Dataid, getnextdata) {
  setTimeout(() => {
    console.log("Data", Dataid);
    if (getnextdata) {
      getnextdata()
    }

  }, 1000)
}

getData(1, () => {
  console.log("getting data 2...");
  getData(2, () => {
    console.log("getting data 3...");
    getData(3, () => {
      console.log("getting data 4...");
      getData(4 , () => {
        console.log("data Installed")
      })
      
    })
  })
})