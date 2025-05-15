using { SunminJeon_1_23 as my } from '../db/schema.cds';

@path: '/service/sunminJeon_1_23'
@requires: 'authenticated-user'
service sunminJeon_1_23Srv {
  @odata.draft.enabled
  entity CustomerMessage as projection on my.CustomerMessage;
}