const types = {
  HLS: 'HLS',
  CMYK: 'CMYK',
  RGB: 'RGB',
}

const RGBtoHLS = (R, G, B) => {
  const R_ = R / 255;
  const G_ = G / 255;
  const B_ = B / 255;
  const Cmax = Math.max(R_, G_, B_);
  const Cmin = Math.min(R_, G_, B_);
  const delta = Cmax - Cmin;

  const HMatrix = [
    {
      condition: () => delta === 0,
      value: 0,
    },
    {
      condition: () => Cmax === R_,
      value: 60 * (((G_ - B_) / delta) % 6),
    },
    {
      condition: () => Cmax === G_,
      value: 60 * (((B_ - R_) / delta) + 2),
    },
    {
      condition: () => Cmax === B_,
      value: 60 * (((R_ - G_) / delta) + 4),
    },
  ];

  const H = (HMatrix.find(e => e.condition()).value + 360) % 360 || 0;

  const L = (Cmax + Cmin) / 2;

  const SMatrix = [
    {
      condition: () => delta === 0,
      value: 0,
    },
    {
      condition: () => delta !== 0,
      value: delta / (1 - Math.abs(2 * L - 1)),
    },
  ];

  const S = SMatrix.find(e => e.condition()).value;

  return { H, S, L };
}

const RGBtoCMYK = (R, G, B) => {
  const R_ = R / 255;
  const G_ = G / 255;
  const B_ = B / 255;

  const K = 1 - Math.max(R_, G_, B_);
  const C = (1 - R_ - K) / (1 - K) || 0;
  const M = (1 - G_ - K) / (1 - K) || 0;
  const Y = (1 - B_ - K) / (1 - K) || 0;

  return { C, M, Y, K };
}

const HLStoRGB = (H, L, S) => {
  const C = (1 - Math.abs(2 * L - 1)) * S;
  const X = C * (1 - Math.abs((H / 60) % 2 - 1));
  const m = L - C / 2;
  
  const HLSMatrix = [
    {
      condition: () => (H >= 0 && H < 60) || !H,
      value: [C, X, 0],
    }, {
      condition: () => H >= 60 && H < 120,
      value: [X, C, 0],
    }, {
      condition: () => H >= 120 && H < 180,
      value: [0, C, X],
    }, {
      condition: () => H >= 180 && H < 240,
      value: [0, X, C],
    }, {
      condition: () => H >= 240 && H < 300,
      value: [X, 0, C],
    }, {
      condition: () => H >= 300 && H <= 360,
      value: [C, 0, X],
    },
  ];

  const [R_, G_, B_] = HLSMatrix.find(e => e.condition()).value;

  const R = (R_ + m) * 255;
  const G = (G_ + m) * 255;
  const B = (B_ + m) * 255;

  return { R, G, B };
}

const CMYKtoRGB = (C, M, Y, K) => {
  const R = 255 * (1 - C) * (1 - K);
  const G = 255 * (1 - M) * (1 - K);
  const B = 255 * (1 - Y) * (1 - K);
  return { R, G, B };
}

export { types, RGBtoHLS, RGBtoCMYK, HLStoRGB, CMYKtoRGB };