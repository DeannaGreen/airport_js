'use strict';

describe('Airport', function(){
  var airport;
  beforeEach(function(){
    airport = new Airport();
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});
