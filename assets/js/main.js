/**
* Template Name: Arsha - v4.3.0
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  let files = [];

  function renderFiles() {
    let newHtml = '';
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      newHtml +=
        `
      <div class="data d-flex-center border-bottom  p-3">
        <div class="row m-0 p-0 w-100">
          <div class="col-xl-4 col-12 m-0 p-0">
            <span><i class="fa-solid fa-file p-2 shadow-sm"></i> ${file.name} </span>
          </div>
          <div class="col-xl-4 col-12 m-0 p-0 d-flex px-2 align-items-center  ">
            <span>Đến 
              <span class="ms-2 border border-secondary rounded px-2 py-1 dropdown-toggle" type="button" id="menu-1"
                data-bs-toggle="dropdown" aria-expanded="false">
                ...
              </span>
              <div class="dropdown-menu p-3 overflow-hidden" aria-labelledby="menu-1">
                <div class="border-bottom">
                  <input type="text" placeholder="Tìm kiếm " class="form-control select-btn">
                </div>
                <div class="row mt-1 m-0 p-0 overflow-scroll h-100">
                  <div class="col-3 p-0  ">
                    <p class=" m-0 p-1 ps-0" role="button">Hình ảnh </p>
                    <p class=" m-0 p-1 ps-0" role="button">Tài liệu </p>
                    <p class=" m-0 p-1 ps-0" role="button">Ebook </p>
                    <p class=" m-0 p-1 ps-0" role="button">Trình bày </p>
                  </div>
                  <div class="col-9 p-0  ps-1 ">
                    <div class="row m-0 p-1">
                      <span class="col-4 m-0 p-1">
                        <button class="btn btn-secondary w-100">PNG</button>
                      </span>
                      <span class="col-4 m-0 p-1">
                        <button class="btn btn-secondary w-100">JPEG</button>
                      </span>
                      <span class="col-4 m-0 p-1">
                        <button class="btn btn-secondary w-100">ZIP</button>
                      </span>
                      <span class="col-4 m-0 p-1">
                        <button class="btn btn-secondary w-100">RAR</button>
                      </span>
                      <span class="col-4 m-0 p-1">
                        <button class="btn btn-secondary w-100">RAR</button>
                      </span>
                      <span class="col-4 m-0 p-1">
                        <button class="btn btn-secondary w-100">RAR</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <div class="d-flex align-items-center status-file justify-content-between ms-auto">
                  <span class=" border-hm border rounded px-2 text-hm">Sẵn sàng </span>
          </div>  
          </div>
          <div class="col-xl-4 col-12 m-0 p-0 d-flex align-items-center">

            <span class="text-secondary">${formatBytes(file.size)}</span>
            <span class=" ms-auto"><i  data-index="${index}"  class="fa-solid fa-xmark"></i></span>
          </div>
        </div> 
      </div>
      `;
    }

    document.getElementById("data-wrapper").innerHTML = newHtml;
  }

  document.getElementById("data-wrapper").addEventListener("click", (e) => {
    if (e.target && e.target.nodeName == "I" && e.target.dataset.index) {
      files.splice(e.target.dataset.index, 1);
      renderFiles();
    }
  });

  const setIntervalAsync = ms => new Promise(resolve => {
    let progress = 0;
    let interv = setInterval(() => {
      progress++;
      if (progress == 10) {
        console.log("here");
        resolve
        clearInterval(interv);
      }
    }, 1000);
  });

  document.getElementById("btn-convert").addEventListener("click", (e) => {
    let documents = document.querySelectorAll(".status-file");

    for (let index = 0; index < documents.length; index++) {
      let p = Promise.resolve();
      p.then(() => setIntervalAsync())
      const element = documents[index];
      let progress = 0;
      let interv = setInterval(() => {
        progress++;
        element.innerHTML = `
            <span class=" border-warning border rounded px-2 text-warning">Tải lên </span>
            <span class="ms-2">${progress}%</span>
          `;
        if (progress == 100) {
          clearInterval(interv);
          element.innerHTML = `
              <span class=" border-success border rounded px-2 text-success">Đã kết thúc </span>
              <span class="ms-2">1 trang </span>
              <button class="ms-2 btn btn-hm">Tải về </button>
            `;
        }
      }, 100);
    }
  });

  document.getElementById("upload-add").addEventListener("change", (evt) => {
    for (let index = 0; index < evt.target.files.length; index++) {
      const file = evt.target.files[index];
      files.push(file);
    }
    renderFiles();
    document.getElementById("convert-default").classList.add("d-none");
    document.getElementById("convert-main").classList.remove("d-none");
  });

  let dropZone = document.getElementById('hero');
  let dropZoneLoading = document.getElementById('preloader_drop');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZoneLoading.addEventListener('dragleave', handleDragLeave, false);
  dropZoneLoading.addEventListener('dragover', handleDragOverLoading, false);
  dropZoneLoading.addEventListener('drop', dropHandler, false);

  function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
  }

  function dropHandler(evt) {
    evt.preventDefault();
    for (let index = 0; index < evt.dataTransfer.files.length; index++) {
      const file = evt.dataTransfer.files[index];
      files.push(file);
    }
    renderFiles();
    document.getElementById("convert-default").classList.add("d-none");
    document.getElementById("convert-main").classList.remove("d-none");
    document.getElementById('preloader_drop').classList.remove('active');
  }

  function handleDragOverLoading(evt) {
    evt.preventDefault();
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    document.getElementById('preloader_drop').classList.add('active');
  }

  function handleDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (evt.screenX == 0) document.getElementById('preloader_drop').classList.remove('active');
  }

  let targetCount = 0;
  var interval = setInterval(() => {
    let data = document.getElementById("count-hm");
    if (!data) return clearInterval(interval);
    targetCount = targetCount + 10000;
    if (targetCount <= data.dataset.end) {
      document.getElementById("count-hm").innerHTML = new Intl.NumberFormat().format(targetCount);
    } else {
      document.getElementById("count-hm").innerHTML = new Intl.NumberFormat().format(data.dataset.end);
      clearInterval(interval);
    }
  }, 1);

})()

