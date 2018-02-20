// Variable for background-opacity
var background = document.getElementById('id');

// ------------------ SUBJECTS MODAL ------------------------
// Get modal
var subjectsModal = document.getElementById('subjectsModal');

// Get the button that opens modal
var btnOpenSubjects = document.getElementById('btnSubjects');

// Get the img element that closes the modal
var subjectsClose = document.getElementsByClassName('close')[0];

// Get the img element for the help button
var subjectsHelp = document.getElementsByClassName('help-button')[0];

// When the user clicks the button, open the modal
btnOpenSubjects.onclick = function() {
	subjectsModal.style.display = 'block';
	$('.background-opacity').fadeIn(200);
};

// When the user clicks on img (close), close the modal
subjectsClose.onclick = function() {
	subjectsModal.style.display = 'none';
};

// When the user clicks on img (help button), show the info text
subjectsHelp.onclick = function() {
	$( '#subjectsModal .info-text-alignment' ).toggle(400);
};

// jQuery to toggle visibility for subjects
// IMT1471 WEB PROJECT
$( '#webProject h3' ).click(function() {
    $( '#webProject .lecture-list' ).slideToggle(400);
});

// IMT1292 WEB CODING
$( '#webCoding h3' ).click(function() {
    $( '#webCoding .lecture-list' ).slideToggle(400);
});

// IMT2661 MOBILE MEDIA DESIGN
$( '#mobileMedia h3' ).click(function() {
    $( '#mobileMedia .lecture-list' ).slideToggle(400);
});

// IMT2002
$( '#colourManagement h3' ).click(function() {
    $( '#colourManagement .lecture-list' ).slideToggle(400);
});

// ------------------ TEACHERS MODAL ------------------------
var teachersModal = document.getElementById('teachersModal');
var btnOpenTeachers = document.getElementById('btnTeachers');
var teachersClose = document.getElementsByClassName('close')[1];
var teachersHelp = document.getElementsByClassName('help-button')[1];

btnOpenTeachers.onclick = function() {
	teachersModal.style.display = 'block';
};

teachersClose.onclick = function() {
	teachersModal.style.display = 'none';
};

// When the user clicks on img (help button), show the info text
teachersHelp.onclick = function() {
	$( '#teachersModal .info-text-alignment' ).toggle(400);
};

// ------------------ STUDENTS MODAL ------------------------
var studentsModal = document.getElementById('studentsModal');
var btnOpenStudents = document.getElementById('btnStudents');
var studentsClose = document.getElementsByClassName('close')[2];
var studentsHelp = document.getElementsByClassName('help-button')[2];

btnOpenStudents.onclick = function() {
	studentsModal.style.display = 'block';
};

studentsClose.onclick = function() {
	studentsModal.style.display = 'none';
};

// When the user clicks on img (help button), show the info text
studentsHelp.onclick = function() {
	$( '#studentsModal .info-text-alignment' ).toggle(400);
};
