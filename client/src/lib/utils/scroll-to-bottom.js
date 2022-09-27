import { animateScroll } from "react-scroll";

/** type import() from */
export const scrollToBottom = (id) => {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      containerId: id,
      duration: 0,
    });
  }, 0);
};

export const scrollToBottomAnimated = (id) => {
  //   setTimeout(() => {
  //     animateScroll.scrollToBottom({
  //       containerId: id,
  //       duration: 250,
  //     });
  //   }, 0);
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 250,
  });
};
