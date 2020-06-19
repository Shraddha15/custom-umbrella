const blue_background = 'rgba(53, 181, 230,0.1)';
const pink_background = 'rgba(219, 60, 145,0.1)';
const yellow_background = 'rgba(254, 211, 77,0.1)';

const blue_color = 'rgb(53, 181, 230)';
const pink_color = 'rgb(219, 60, 145)';
const yellow_color = 'rgb(254, 211, 77)';

(function(){
  let uploadBtnImage = document.querySelector("#upload-btn-img");
  let loaderBtnImage = document.querySelector("#loader-btn-img");
  bindEvents();

  function bindEvents(){

    //handle logo upload
    let fileUploadInput = document.getElementById('file-upload');
    fileUploadInput.addEventListener('change',function(){
    showLoader();  
      
      let fileSize = this.files && this.files[0] && this.files[0].size
      if(fileSize > (5*1024*1024)){
          hideLoader();
         return alert('file is too big')
       }
      if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
               let customImagePreview = document.getElementsByClassName('uploaded-logo');
               customImagePreview[0].setAttribute('src', e.target.result);
            };

            reader.readAsDataURL(this.files[0]);
            reader.onloadend = function(){
              hideLoader();
            }
        }
    });

  
  document.querySelectorAll('.color-pallette-item').forEach(item => {

      item.addEventListener('click', event => {
        document.querySelectorAll('.color-pallette-item').forEach(item=>{
    item.classList.remove('active');
  })
        item.classList.add("active");
        let colorSelected = item.dataset.color;
        if(colorSelected === 'pink'){
          changeUmbrellaInBackground("src/assets/Pink_umbrella.png")
          changeBackGroundColor(pink_background);
          changeButtonColor(pink_color);
          
        }else if(colorSelected === 'blue'){
          changeUmbrellaInBackground("src/assets/Blue_umbrella.png")
          changeBackGroundColor(blue_background);
          changeButtonColor(blue_color);
        }else{
          changeUmbrellaInBackground("src/assets/Yello_umbrella.png")
          changeBackGroundColor(yellow_background);
          changeButtonColor(yellow_color);

        }
      })
  })
  }

  function changeUmbrellaInBackground( imageUrl ){
    document.querySelector('.custom-umbrella-preview').setAttribute("src",imageUrl);
  }

  function changeBackGroundColor( color ){
    document.body.style.backgroundColor = color;
  }

  function changeButtonColor ( color ){
    let uploadBtn = document.querySelector('#upload-btn');
    uploadBtn.style.background = color;
  }

  function hideLoader(){
      uploadBtnImage.classList.remove('hidden');
      loaderBtnImage.classList.add('hidden');
  }
  function showLoader(){
      uploadBtnImage.classList.add('hidden');
      loaderBtnImage.classList.remove('hidden');
  }
})()