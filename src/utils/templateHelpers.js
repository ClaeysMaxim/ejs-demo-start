const helpers = {
  uppie: function (inp) {
    const upper = inp.toUpperCase();
    return upper;
  },
  highlight: function (inp) {
    return `🦕<span style="background-color: yellow">
        ${inp}
        </span>`;
  },
  emojify: function (inp, className) {
    return `<span class="${className}">💛 ${inp}</span>`;
  },
};

export default helpers;
