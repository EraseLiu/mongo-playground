export const settings = {
  logo: { type: String, default: '/public/images/logo.png' },
  // 默认三级分销, 三级分润, 最高三级.
  distributionLevel: { type: Number, default: 3 },
  // 分润比率.
  distributionRatio: { type: [Number], default: [5, 3, 2] }
};

export const categories = {
  name: String,
  pid: { type: Number, default: 0 },
  swiperImgs: { type: [String] }
};
