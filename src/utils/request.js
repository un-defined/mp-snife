export default function get(url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      success(res) {
        if (res.data.code === '000000') {
          resolve(res.data.data);
        } else {
          reject(res.data);
        }
      },
    });
  });
}
