'use strict'

// Makes the entire row clickable
$(document).ready(function() {
  $('.clickable').on('click', function() {
    window.location = $(this).data('href')
  });
});
