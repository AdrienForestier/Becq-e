const { Pool } = require('pg');
const test = new Pool({
    user: 'tucoenergie',
    host: 'sitehugo.avirondevinci.fr',
    database: 'Becq_e',
    password: '5|7t4R+YyspY/!8M',
    port: 5432,
})
module.exports=test;
