const CONTAINER_NAME = "remote-cart";

import("./bootstrap")
  .then(({ mount }) => {
    const el = document.getElementById(CONTAINER_NAME);

    mount(el);
  })
  .catch((e) => console.log("Something went wrong", e));
