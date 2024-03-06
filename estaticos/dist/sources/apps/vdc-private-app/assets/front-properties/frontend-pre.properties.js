(function (globalThis) {
  globalThis['environment'] = globalThis['env'] || {};

  // Environment variables
  globalThis['environment']['name'] = 'PRE';
  globalThis['environment']['apiUrl'] = 'https://PRE.api.com';
  globalThis['environment']['timeout'] = 3500;
  globalThis['environment']['customFeatureEnabled'] = true;


  //=============================================================================
  globalThis['environment']['apiHost'] = 'https://api.vdc.es.pre.emea.aws.mapfre.net';
  globalThis['environment']['clientAppUrl'] = 'https://client-app.vdcomercios.pre.mapfre.es/';
  globalThis['environment']['apiKey'] = 'NwsREQns2Fr8Rzry';

})(this);
