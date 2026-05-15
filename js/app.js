$(function () {
  var workoutBank = {
    'VO2 Max': [
      '6 x 800m at 5K effort with 2 minutes easy jog recovery.',
      '10 x 400m fast but controlled with 90 seconds recovery.',
      '5 x 1K at strong effort with 2 minutes jog recovery.'
    ],
    'Threshold': [
      '20 minute tempo run at comfortably hard effort.',
      '3 x 10 minutes threshold with 2 minutes easy jog recovery.',
      '4 mile steady state effort after an easy warm up.'
    ],
    'Long Run': [
      'Easy long run with the final 2 miles slightly faster.',
      'Progressive long run starting easy and finishing steady.',
      'Relaxed endurance long run focused on time on feet.'
    ],
    'Easy / Recovery': [
      'Easy 30 to 45 minute run with relaxed breathing.',
      'Recovery run plus light stretching or mobility after.',
      'Short easy run focused on keeping the legs fresh.'
    ]
  };

  $('#focusAccordion').accordion({
    collapsible: true,
    heightStyle: 'content'
  });

  $('#generateWorkout').on('click tap', function () {
    var selectedType = $('#workoutType').val();
    var workouts = workoutBank[selectedType];
    var randomIndex = Math.floor(Math.random() * workouts.length);
    $('#workoutResult').text(workouts[randomIndex]);
  });
});
