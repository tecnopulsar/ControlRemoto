$(document).ready(function() {
    $(document).off('mousedown', '.ant-action').on('mousedown', '.ant-action', function (b) {
        if (b.which === 1 || b.which === 2) {
            antAction = $(this).parents('.ant-container');
            DigitalData.setActionInteraction(antAction, $(this));
        }
    });

    DigitalData.fillPageValues();
    DigitalData.fillSessionValues();
    DigitalData.fillUserValues();
    DigitalData.buildAntInRichEdit(".prempack-title");
    DigitalData.buildAntInRichEdit(".description");
    DigitalData.buildAntInRichEdit(".dtv-rich-text");
    DigitalData.buildAntInRichEdit(".ppdTab-content-description");


    
});