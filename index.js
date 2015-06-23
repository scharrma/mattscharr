function keyup_change_sections(event)
{
  current_section = $('section').filter(function() { return $(this).css('display') != 'none' });
  switch (event.keyCode) {
    case 37:
    case 38:
    // go to previous section
    change_sections(current_section, 'previous');
    break;
    case 39:
    case 40:
    // go to next section
    change_sections(current_section, 'next');
    break;
    default:
    // do nothing
    break;
  }
}

function change_sections(current_section, direction)
{
  if (direction == 'next')
    display_next_section(current_section);
  else
    display_previous_section(current_section);
}

function display_next_section(current_section)
{
  current_section.fadeOut(500, function() { display_section(current_section.next(), $FIRST) });
}

function display_previous_section(current_section)
{
  current_section.fadeOut(500, function() { display_section(current_section.prev(), $LAST) })
}

function display_section(section, rollover)
{
  if (section.length)
    section.fadeIn(500);
  else
    rollover.fadeIn(500);
}

$(document).ready(function()
{
  $FRAMES = $("section");
  $FIRST  = $("#splash");
  $LAST   = $("#contact");

  $FRAMES.on("click", function() { change_sections($(this), 'next') });
  $(window).on("keyup", function(e) { keyup_change_sections(e) })
});
