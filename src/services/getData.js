import axios from "axios";

export const getSpecialMenu = (calllback) => {
  axios
    .get("./data/specialMenu.JSON")
    .then((res) => {
      calllback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCarouselItems = (calllback) => {
  axios
    .get("./data/carouselData.JSON")
    .then((res) => {
      calllback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getOrderMethod = (calllback) => {
  axios
    .get("./data/orderMethod.JSON")
    .then((res) => {
      calllback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMenuItem = (calllback) => {
  axios
    .get("./data/menu.JSON")
    .then((res) => {
      calllback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
