(function (globalThis) {
  globalThis['environment'] = globalThis['env'] || {};

  // Environment variables
  globalThis['environment']['name'] = 'PRO';
  globalThis['environment']['apiUrl'] = 'https://PRO.api.com';
  globalThis['environment']['timeout'] = 7200;
  globalThis['environment']['customFeatureEnabled'] = false;


  //=============================================================================
  globalThis['environment']['apiHost'] = 'https://api.vdc.es.pro.emea.aws.mapfre.net';
  globalThis['environment']['clientAppUrl'] = 'https://client-app.vdcomercios.mapfre.es/';
  globalThis['environment']['apiKey'] = 'NwsREQns2Fr8Rzry';

  globalThis['environment']['production'] = true;
  globalThis['environment']['logger'] = false;

})(this);
