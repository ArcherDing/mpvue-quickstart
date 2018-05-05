import wx from 'wx';
import Fly from 'flyio';

const request = new Fly();

request.interceptors.request.use((request) => {
  wx.showNavigationBarLoading();
  return request;
});

request.interceptors.response.use(
  (response, promise) => {
    wx.hideNavigationBarLoading();
    return promise.resolve(response.data);
  },
  (error, promise) => {
    wx.hideNavigationBarLoading();
    wx.showToast({
      title: error.message,
      icon: 'none'
    });
    return promise.resolve();
  }
);

export default request;
