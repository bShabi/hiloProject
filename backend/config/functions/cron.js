'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }
  '* * * * * *': async () => {
    console.log("object")
    // await strapi.plugins['email'].services.email.send({
    //   to: 'tzsdqfkxebdsfwdnnl@niwghx.com',
    //   from: 'joelrobuchon@strapi.io',
    //   replyTo: 'annesophiepic@strapi.io',
    //   subject: 'Use strapi email provider successfully',
    //   text: 'Hello world!',
    //   html: 'Hello world!',
    // })
    // console.log("object2")

  }
};
