(function (globalThis) {
  globalThis['environment'] = globalThis['env'] || {};

  // Environment variables
  globalThis['environment']['name'] = 'SND';
  globalThis['environment']['apiUrl'] = 'https://SND.api.com';
  globalThis['environment']['timeout'] = 2540;
  globalThis['environment']['customFeatureEnabled'] = false;

  //=============================================================================
  globalThis['environment']['apiHost'] = 'http://localhost:8080';
  globalThis['environment']['clientAppUrl'] = 'http://localhost:3000';
})(this);
