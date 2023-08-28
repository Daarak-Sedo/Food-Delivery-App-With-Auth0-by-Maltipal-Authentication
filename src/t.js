useEffect(() => {
  if (filterType) {
    alert("b");
    const filteredData = data.filter((products) => {
      console.log("products1", products);

      return products.some((product) => {
        console.log("products2", product);
        return product.category === filterType;
      });
    });

    console.log("filteredData", filteredData);
    setDataToMap(filteredData);
  } else {
    setDataToMap(data);
  }
}, [filterType]);

useEffect(() => {
  if (filterType) {
    alert("b");
    const filteredData = data.filter((products) => {
      console.log("products1", products);
      product.category === filterType;
    });

    console.log("filteredData", filteredData);
    setDataToMap(filteredData);
  } else {
    setDataToMap(data);
  }
}, [filterType]);




const filtredCategory = filteredData.filter((obj) =>{
    obj.category===filterType
  })
  console.log("filtredCategory", filtredCategory);