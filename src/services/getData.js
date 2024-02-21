import axios from "axios";

export const getSpecialMenu = (calllback) => {
  axios
    .get("./src/data/specialMenu.JSON")
    .then((res) => {
      calllback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCarouselItems = (calllback) => {
  axios
    .get("./src/data/carouselData.JSON")
    .then((res) => {
      calllback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getOrderMethod = (calllback) => {
  axios
    .get("./src/data/orderMethod.JSON")
    .then((res) => {
      calllback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMenuItem = (calllback) => {
  axios
    .get("./src/data/menu.JSON")
    .then((res) => {
      calllback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
