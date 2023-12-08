function gyroscope(){
  VanillaTilt.init(document.querySelector
    (".profile"), {
        max: 25,
        speed: 400,
      });
};

gyroscope();