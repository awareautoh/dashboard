var arrLang = {
      'en': {
        'home': 'Nutrition Status',
        'LSIS': 'LSIS',
        'Senitel': 'Senitel Survey',
        'LECS': 'LECS'
      },
      'la': {
        'home': 'ພາບລວມໂພຊະນາການ',
        'LSIS': 'ການສຳຫຼວດ LSIS ',
        'Senitel': 'ສຳຫຼວດເຝົ້າລະວັງ',
        'LECS': 'ສຳຫຼວດ LECS'
      }
    };
	<script type="text/javascript">
      // Process translation
    $(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });
  </script>
