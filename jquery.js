$('document').ready(function(){
  // SELECTOR
  // $('.logo').css('text-transform', 'lowercase');
  // $('h2#heading1').hide();
  // $(':submit').css({
  //   'padding':'0.5rem 2rem',
  //   'display':'block',
  //   'font-family':'inherit',
  //   'color':'#333',
  //   'background-color':'#ECE325',
  //   'border':'1px solid #ECE325'
  // });

  // EVENTS
  // $('h2').click(function(){
  //   $('h2').css('color', '#ececec');
  // });

  // 1. Target a selector and hide the particular element of it
  // $('p').click(function(){
  //   $(this).hide();
  // });

  // 2. Click button to show browser popup alert
  // $('#submitmessage').click(function(){
  //   alert('Your message has been sent!');
  // });
  // Does the same as the shorthand for click function, might save a couple of milliseconds
  // $('#submitmessage').on('click', function(){
  //   alert('Your message has been sent!');
  // });

  // 3. Click one element to hide / show another
  // $('#btn-tab-1').click(function(){
  //   $('.tab-text').hide();
  // });
  // $('#btn-tab-2').click(function(){
  //   $('.tab-text').show();
  // });

  // 4. CLick one element to hide & show (toggle) another
  // $('#btn-tab-toggle').click(function(){
  //   $('.toggle-tab-text').toggle();
  // });

  // 5. Hover on one element to show & hide another (shorthand for mouseenter & mouseleave)
  // $('#btn-tab-1').hover(function(){
  //   $('.tab-text').toggle();
  // });
  // The long properties for the shorthand above
  // $('#btn-tab-1').mouseenter(function(){
  //   $('.tab-text').toggle();
  // });
  // $('#btn-tab-1').mouseleave(function(){
  //   $('.tab-text').toggle();
  // });

  // 6. Move the mouse inside an element to show & hide another - a dud, not recommended in most cases
  // $('#btn-tab-toggle').on('mousemove', function(){
  //   $('.toggle-tab-text').toggle();
  // });

  // 7. Toggle an element by holding the click
  // $('#btn-tab-toggle').on('mousedown', function(){
  //   $('.toggle-tab-text').toggle();
  // });
  // $('#btn-tab-toggle').on('mouseup', function(){
  //   $('.toggle-tab-text').toggle();
  // });

  // 8. Retrieve the syntax of the selector
  // $('h2#heading1').on('click', function(e){
    // Retrive only the information of the targeted selector
    // alert(e.currentTarget.id);
    // alert(e.currentTarget.className);
    // Retrieve the content of the element
    // alert(e.currentTarget.innerHTML);
    // Retrieve the whole syntax of the element
    // alert(e.currentTarget.outerHTML);
  // });

  // 9. Popup a browser alert on input focus - not recommended, intrusive
  // $('input').focus(function(){
  //   alert('Focus');
  // });

  // 10. Highlight input box when focused
  $('input, textarea').on('focus', function(){
    $(this).css({
      'background-color':'#f4f4f4',
    });
  })
  $('input, textarea').on('blur', function(){
    $(this).css({
      'background-color':'white',
    });
  })

  // 11. Log to console how many times the keyboard has been typed up
  // $('input').keyup(function(){
  //   console.log('keyup');
  // })

  // 12. Log to console each key that has been typed up and how it was formed on the input
  $('input').keyup(function(e){
    console.log(e.target.value);
  })

  // 13. Send alert when a user choose a specific value from multiple choice?
  // $('select#sel-fruit').on('change', function(){
  //   alert('Changed!')
  // })
  // This sends alert for the value itself
  $('select#sel-fruit').on('change', function(e){
    alert(e.target.value)
  })

  // 14. Log when the entire form is submitted
  $('form').submit(function(event){
    event.preventDefault(); // This prevents the default action of the event
    var name = $('input#name').val(); // This shows the inputted value 
    var select = $('input#replyto').val();
    console.log(name, select);
  })

  // DOM MANIPULATION
  // 1. Add a class to another element that isn't applied with that class on HTML
  // $('p.para1').addClass('faux-class');

  // 2. Remove a class from the element that was applied with that class
  // $('h2.faux-class').removeClass('faux-class');

  // 3. Assign a class to an element via a button toggle
  // $('#btn1').click(function(){
    // $('p.para2').toggleClass('faux-class');
  // })

  // 4. Adding & changing content from within the DOM
  // $('#myDiv').text('Hello World'); // This div was empty initially and it's added with text content
  // $('#myDiv').html('<h2>This is bananas.</h2>'); // This add any HTML element
  // alert($('#myDiv').text()); // This show the manipulated content on browser alert upon loading

  // 5. Add content with HTML tag to an element 
  // $('ul').append('<li>Append List Item</li>'); // Add the content to the end of the element
  // $('ul').prepend('<li>Prepend List Item</li>'); // Add the content to the beginning of the element

  // 6. Send an element before/after the target element
  // $('.para1').appendTo('.para2'); // send to after
  // $('.para1').prependTo('.para2'); // send to before

  // 7. Add element before/after an element, similar to CSS pseudo-element
  // $('ul').before('<h3>Hello</h3>');
  // $('ul').after('<h3>World</h3>');

  // 8. Remove an element
  // $('ul').empty(); // similar to CSS display: none
  // $('ul').detach(); // this also removes the element from the HTML document tree altogether
  
  // 9. Attribute manipulation
  $('a').attr('target', '_blank'); // add target attribute to a link to open in a new tab
  // alert($('a#link-demo').attr('href')); // send the href value to browser alert 
  $('textarea').removeAttr('rows'); // remove rows attribute from a textarea 

  // 10. Wrap a specific element in another element
  // $('p.para1, p.para2').wrap('<div>'); // wrap each paragraph in separate div
  $('p.para1, p.para2').wrapAll('<div>'); // wrap both paragraphs in a single div

  // 11. Add new element by form input, but will disappear upon reloading
  $('#newItem').keyup(function(event){
    var code = event.which; // This watch for jQuery keyboard input code, which the Enter is 13
    if (code == 13) {
      event.preventDefault;
      $('ul').append('<li>' + event.target.value + '</li>');
    }
  })

  // 12. Appending arrays into HTML element
  var myArr = ['Molly', 'Candy', 'Carmel', 'Nikki', 'Ella'];
  $.each(myArr, function(i, val){ // loop through an array
    // console.log(val);
    $('#users').append('<li>' + val + '</li>');
  })

  // 13. Turn HTML elements into arrays
  var newArr = $('ul#list-demo li').toArray();
  $.each(newArr, function(i, val){
    console.log(val.innerHTML);
  });


  // EFFECTS & ANIMATION
  // 1. Fade
  $('#btnFadeOut').click(function(){
    $('#inner-box').fadeOut(2000, function(){
      $('#btnFadeOut').text('It\'s Gone!'); // Change the button text after the fadeout finishes
    }); 
  });
  $('#btnFadeIn').click(function(){
    $('#inner-box').fadeIn(1000);
  });
  $('#btnFadeTog').click(function(){
    // $('#inner-box').fadeToggle(1000);
    $('#inner-box').fadeToggle(500);
  });

  // 2. Slide - applying CSS min-height will cause some issue with the animation
  $('#btnSlideUp').click(function(){
    $('#inner-box').slideUp(1000);
  });
  $('#btnSlideDown').click(function(){
    $('#inner-box').slideDown(1000);
  });
  $('#btnSlideTog').click(function(){
    $('#inner-box').slideToggle(1000);
  });
  $('#btnSlideStop').click(function(){
    $('#inner-box').stop(); // watchout for the toggle behavior when you use this
  });

  // 3. Move
  $('#moveLeft').click(function(){
    $('#inner-box-2').animate({
      right: '500', // push the item 500px from the right (goes to the left)
      width: '300px',
      height: '300px',
      opacity: '0.5'
    });
  });
  $('#moveRight').click(function(){
    $('#inner-box-2').animate({
      right: '0', // push the item 0px from the right (goes back to its original position)
      width: '100px',
      height: '100px',
      opacity: '1'
    });
  });
  $('#moveAround').click(function(){
    var movingbox = $('#inner-box-2');
    movingbox.animate({
      left: 300,
      top: 0
    });
    movingbox.animate({
      left: 300,
      top: 300,
    });
    movingbox.animate({
      left: 0,
      top: 300
    });
    movingbox.animate({
      left: 0,
      top: 0
    });
  });

  // AJAX
  // 1. Bringing content from another file to an element
  // 1.1 load method
  // $('#result').load('test.html', function(responseTxt, statusTxt, xhr){
  //   if (statusTxt == 'success'){
  //     alert('The banana content is added successfully.');
  //   }
  //   else if (statusTxt == 'error'){
  //     alert('This ain\'t your banana, chief');
  //   }
  // });

  // 1.2 get method
  // $.get('test.html', function(data){
  //   $('#result').html(data);
  // });

  // 1.3 getJSON
  $.getJSON('users.json', function (data){
    $.each(data, function(i, user){
      $('ul#users').append('<li>' + user.firstName + '</li>')
    });
  });



  // Get & Set Value
  // $('form').submit(function(){
  //   alert ($('#name').val());
  // });
  // $('form').submit(function(){
  //   var $('#name').val();
  // });
});