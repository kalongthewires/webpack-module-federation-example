import("./bootstrap")
  .then(({ mount }) => {
    const el = document.getElementById("root");

    if (el) {
      mount(el);
    }
  })
  .catch((e) => console.log("Something went wrong", e));
