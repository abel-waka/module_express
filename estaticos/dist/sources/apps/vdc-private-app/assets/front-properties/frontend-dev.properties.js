(function (globalThis) {
  globalThis['environment'] = globalThis['env'] || {};

  // Environment variables
  globalThis['environment']['name'] = 'DEV';
  globalThis['environment']['apiUrl'] = 'https://DEV.api.com';
  globalThis['environment']['timeout'] = 2500;
  globalThis['environment']['customFeatureEnabled'] = true;


  //=============================================================================
  globalThis['environment']['apiHost'] = 'https://api.vdc.es.int.emea.aws.mapfre.net';
  globalThis['environment']['clientAppUrl'] = 'http://dev-mapfre-vd-client-app.ed-integrations.com/';
  globalThis['environment']['apiKey'] = 'NwsREQns2Fr8Rzry';

})(this);
