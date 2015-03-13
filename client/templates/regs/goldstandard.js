Template.goldstandard.helpers({
    randomImages: function() {
        var isRecentlyUpdated = Session.get('recentlySubmitted');
        var numImages = 20;
        if (imagesUsed[numImages-1] == undefined && hasGameStarted === false) {
            //calculates the number of turns as the log base 2 of the number of images
            numRoundsLeft = Math.floor(Math.log(numImages) / Math.log(2)) - 1;
            Session.set('numRoundsLeft', numRoundsLeft);

            var allImages = Images.find().fetch();
            var numArray = [];
            //console.log(imagesUsed.length);
            for (var i = 0; i < numImages -10; i++) {
                var loc = Math.floor(Math.random() * allImages.length);
                var temp = allImages[loc];
                imagesUsed[i] = temp;
                allImages.splice(loc,1);
            }
            var loc2 = Math.floor(Math.random() * imagesUsed.length);
            //console.log(imagesUsed[loc2]);
            targetImage = imagesUsed[loc2];
            if (imagesUsed.length === numImages) {
                var noImagesUndefined = true;
                for (var i = 0; i < imagesUsed.length; i++) {
                    if (imagesUsed[i] == undefined) {
                        noImagesUndefined = false;
                    }
                }
                if (noImagesUndefined === true) {
                    hasGameStarted = true;
                }
            }
        } else if (isRecentlyUpdated === true && Session.get('areRoundsOver') === 0) {
            var isInSelected = isTargetInSelected();
            numRoundsLeft -= 1;
            Session.set('numRoundsLeft', numRoundsLeft);
            if (numRoundsLeft === 0) {
                Session.set('areRoundsOver', 1);
            }
            if (isInSelected === false) {
            for (var i = 0; i < selectedImages.length; i++) {
                var imageIndex = findIdInUsedImages(selectedImages[i]);
                imagesUsed.splice(imageIndex, 1);
            }
            } else {
                var imagesUsedLength = imagesUsed.length;
                var newImagesUsed = [];
                for (var i = 0; i < imagesUsedLength; i++) {
                    if (findIdInSelected(imagesUsed[i]._id) === true) {
                        newImagesUsed[newImagesUsed.length] = imagesUsed[i];
                    }
                }
                imagesUsed = newImagesUsed;
            }
            clearSelectedImages();
            Session.set('selectedTag', 0);
        } else if (isRecentlyUpdated === true && Session.get('areRoundsOver') === 1) {
            // choose one image!
            if (Session.get('finalImageSelected') === targetImage._id) {
                // you win!
                alert('You win!');
                Session.set('isEnd',1);
                imagesUsed = [];

            } else if (Session.get('finalImageSelected') === "") {
                // guess which one!
                alert('Guess which one it is!');
            } else {
                // you lose
                alert('You lose :(');
                Session.set('isEnd',1);
                imagesUsed = [];
            }

            }
        //console.log(imagesUsed);
        return imagesUsed;
    },
})