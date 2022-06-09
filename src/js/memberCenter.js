window.addEventListener("load", () => {
    document.getElementById('memphoto').onchange = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('memphotoPreview').src = reader.result;
        }
        reader.readAsDataURL(file);
    }

}, false);