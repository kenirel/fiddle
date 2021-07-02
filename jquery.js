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
  $('ul').append('<li>Append List Item</li>'); // Add the content to the end of the element
  $('ul').prepend('<li>Prepend List Item</li>'); // Add the content to the beginning of the element

  // 6. Send an element before/after the target element
  // $('.para1').appendTo('.para2'); // send to after
  // $('.para1').prependTo('.para2'); // send to before

  // 7. Add element before/after an element, similar to CSS pseudo-element
  $('ul').before('<h3>Hello</h3>');
  $('ul').after('<h3>World</h3>');

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

  // 12. Arrays method
  



  // Get & Set Value
  // $('form').submit(function(){
  //   alert ($('#name').val());
  // });
  // $('form').submit(function(){
  //   var $('#name').val();
  // });
});