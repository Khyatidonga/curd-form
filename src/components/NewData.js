import React, { useEffect } from "react";

const NewData = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const URL =  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4bbfe6c144684a4ab31b45a0cdbf5983";
    const response = await fetch(URL);
    if (response) {
      const data = await response.json();
      console.log(data, "dtatataa");
    }
  };
  return (
    <div>
      {/* <div class="container mt-3">
  <h2>Card Image</h2>
  <p>Image at the top (card-img-top):</p>
  <div class="card" style="width:400px">
    <img class="card-img-top" src="../bootstrap4/img_avatar1.png" alt="Card image" style="width:100%" />
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>
  <br />
  
  <p>Image at the bottom (card-img-bottom):</p>
  <div class="card" style="width:400px">
    <div class="card-body">
      <h4 class="card-title">Jane Doe</h4>
      <p class="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
    <img class="card-img-bottom" src="../bootstrap4/img_avatar6.png" alt="Card image" style="width:100%" />
  </div>
</div><div class="container mt-3">
  <h2>Card Image</h2>
  <p>Image at the top (card-img-top):</p>
  <div class="card" style="width:400px">
    <img class="card-img-top" src="../bootstrap4/img_avatar1.png" alt="Card image" style="width:100%" />
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>
  <br/>
  
  <p>Image at the bottom (card-img-bottom):</p>
  <div class="card" style="width:400px">
    <div class="card-body">
      <h4 class="card-title">Jane Doe</h4>
      <p class="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
    <img class="card-img-bottom" src="../bootstrap4/img_avatar6.png" alt="Card image" style="width:100%"/>
  </div>
</div> */}
    </div>
  );
};

export default NewData;
