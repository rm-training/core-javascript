$(function() {
  var confirm = new Confirm(function(confirm) {
    var today = (new Date()).toDateString();

    confirm.assertInstanceOf(processString, Function);

    confirm.assertEqual(today + " 0", processString("today"), "Today");
    confirm.record(true, "'today' replaced by date");

    confirm.assertEqual("3.14 0", processString("pi"));
    confirm.record(true, "'pi' replaced by 3.14");

    confirm.assertEqual("xx 3.14 xx 4", processString("xx pi xx"));
    confirm.assertEqual("xX " + today + " 3.14 2", processString("xX today pi"));
    confirm.record(true, "'x values' counted and appended");

    confirm.record(true, "passed");
  });
});