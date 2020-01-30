"use strict";

window.momentum = window.momentum || {};

// Core - time, image
momentum.Core = {
  timeStr: "", // 현재시간
  quoteStr: "", // 교훈
  weatherStr: "", // 현재날씨
  isAmpm: false,
  ampm: "",
  salutation: "", // 현재인사말
  location: "",

  lat: 0, // 위도 Latitude
  lon: 0, // 경도 Longitude

  start: function() {
    // get location
    if (!navigator.geolocation) {
      throw "Geolocation not supported!";
    }

    function error() {
      throw "Error occured!!";
    }

    // navigator.geolocation.getCurrentPosition(
    //   function(position) {
    //     console.log("EXECUTING");
    //     this.lat = position.coords.latitude;
    //     this.lon = position.coords.longitude;
    //     console.log(this.lat, this.lon);
    //     this.updateWeather();
    //   }.bind(this),
    //   error
    // );
    this.setTime();

    // this.updateQuote();
    // this.render();
  },
  setTime: function() {
    let date = new Date();
    let hours = date.getHours();

    // 오전
    if (hours <= 12) {
      this.salutation = "morning";
    }
    // 오후
    if (hours > 12) {
      this.salutation = "afternoon";
    }
    // 저녁
    if (hours > 18) {
      this.salutation = "evening";
    }

    if (hours > 11 && hours < 24) {
      this.ampm = "PM";
    } else {
      this.ampm = "AM";
    }

    if (this.isAmpm && hours > 12) {
      hours -= 12;
    }

    let mins =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let sec =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

    let ret = "";
    ret = `${ret}${hours}:${mins}${this.isAmpm ? "" : `:${sec}`}`;
    this.timeStr = ret;
  },
  //
  setQuote: function(quoteData) {
    this.quoteStr = quoteData.message;
    const quoteEl = document.querySelector("#quote-text");
    quoteEl.innerHTML.text(this.quoteStr);
    this.render();
  },
  // setTime 메소드를 불러 시간을 업데이트.
  updateTime: function() {
    this.setTime();
  },
  render: function() {
    const timeEl = document.querySelector("#time");
    const quoteEl = document.querySelector("#quote-text");
    const weatherEl = document.querySelector("#weather");
    const greetingEl = document.querySelector("#greetings");
    const ampmEl = document.querySelector("#ampm");
    const locationEl = document.querySelector("#location");

    timeEl.innerHTML = this.timeStr;
    greetingEl.innerHTML = `Good ${this.salutation}, Dillon Jang`;
    if (this.isAmpm) {
      ampmEl.innerHTML = this.ampm;
    }
    weatherEl.innerHTML = this.weatherStr;
    quoteEl.innerHTML = this.quoteStr;
    locationEl.innerHTML = this.location;
  }
};
