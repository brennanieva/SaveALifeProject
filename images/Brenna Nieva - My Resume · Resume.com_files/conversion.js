/******************************************************************************
 * conversion.js
 * JuJu Inc. (copyright 2017)
 *
 * +SUGGESTED USE:
 *
 * You must first obtain a a Site ID from JUJU, Inc.  This id allows us to
 * track that the conversion event originated from your website.  Once you have
 * this ID, simply include this script in the header of your HTML like so
 * replacing {Site ID} with the Site ID provided to you:
 * 
 * <script language="javascript" src="https://www.juju.com/ctracker/conversion.js?site_id={Site ID}"></script>
 *
 * Once included, the user's browser will automatically perform the callback
 * as the page is loaded.
 *
 * You may additionally add an optional label to the callback using the label= variable in the URL:
 *
 * <script language="javascript" src="https://www.juju.com/ctracker/conversion.js?site_id={Site ID}&label={Label}"></script>
 * NOTE: You may provide, at most, 10 different labels between various site
 * pages and, at most, 1 label per page.  Additionally, a label may not begin
 * with an underscore "_" character.
 *
 * +ADVANCED USE:
 *
 * If you wish to trigger the callback manually, you may prevent an automatic
 * callback by including this script by adding "&auto=False" to the URL:
 *
 * <script language="javascript" src="https://www.juju.com/ctracker/conversion.js?site_id={Site ID}&auto=False"></script>
 *
 * You may then initiate the callback by manually calling its function like so:
 * JUJU.conversionCallback();
 *
 *****************************************************************************/

JUJU = typeof(JUJU) !== 'undefined'? JUJU : {};

JUJU.conversion_tracker_url = "https://www.juju.com/ctracker/conversion.gif";
JUJU.site_id = "f1ec11826072477a13101b02c06bcd1e";
JUJU.label = "";

JUJU.conversionCallback = function(vars) {
    var vars = typeof(vars) !== 'undefined'? vars : {};
    var site_id = vars.site_id || JUJU.site_id;
    var label = vars.label || JUJU.label;
    var site_url = encodeURIComponent(window.location.href);
    var url = JUJU.conversion_tracker_url + '?site_id=' + site_id;
    url += '&site_url=' + encodeURIComponent(window.location.href);
    if (label) {
        url += '&label=' + label;
    }
    var px = new Image();
    px.src = url;
};