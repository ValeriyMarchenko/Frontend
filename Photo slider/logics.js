let numberOfPicture = 0;
let nameArray = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5'];

function changePictureRight() {
    if (numberOfPicture == nameArray.length) {
        numberOfPicture = 0;
    }
    changePic.src = 'assets/' + nameArray[numberOfPicture] + '.jpg';
    numberOfPicture++;
}

function changePictureLeft() {
    numberOfPicture--;
    if (numberOfPicture == -1) {
        numberOfPicture = nameArray.length - 1;
    }
    changePic.src = 'assets/' + nameArray[numberOfPicture] + '.jpg';
}