import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | actions', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:actions');
    assert.ok(route);
  });
});
