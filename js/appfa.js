
$(document).ready(function(){

	var useruid = window.location.hash.substring(1);
	  console.log(useruid); 

	    firebase.auth().onAuthStateChanged(function(user) {
	        if (user) {
	            var containerContact = $('#follower-other');
				    firebase.database().ref('/user/' + useruid + '/data').on('value', function(snapshot) {
						var userPhoto = $('<img>', {
						  'class': 'responsive-img circle user img-cont',
						  'src': snapshot.child('photo').val()
						});

						var pName = $('<h3/>', {
						  'class': 'user-name-profile',
						}).text(snapshot.val().name);

						$('#user-photo').append(userPhoto);
						$('#user-name').append(pName);
				    });
	        }
	    });
	
		
});