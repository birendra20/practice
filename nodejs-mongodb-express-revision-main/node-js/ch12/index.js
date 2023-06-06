//DNS

// The dns ( Domain Name System ) module enables name resolution . For example , use it to look up
// IP addresses of host names .

// const dns = require ( ' dns ' ) ;
// import dns from ' dns ' ;

// lookup ( ) - It resolves a host name ( e.g. ' geekyshows.com ' ) into the first found A ( IPv4 ) or AAAA
// ( IPv6 ) record . lookup ( ) does not necessarily have anything to do with the DNS protocol . The
// implementation uses an operating system facility that can associate names with addresses , and
// vice versa .

// resolve ( ) - It uses the DNS protocol to resolve a host name ( e.g. ‘ geekyshows.com ' ) into an array
// of the resource records . The callback function has arguments ( err , records ) . When successful ,
// records will be an array of resource records .
// Syntax : - resolve ( hostname , rrtype , callback )

//rrtype;            //record contains
// (" A "); ==>   IPv4 addresses ( default )
// (" AAAA "); ==>   IPv6 addresses
// (" ANY "); ==>  any records
// (" CAA "); ==>   CA authorization records
// (" CNAME "); ==>   Canonical Name Records
// (" MX "); ==>   Mail Exchange Records
// (" NAPTR "); ==> Name Authority Pointer Records
// (" NS "); ==> Name Server Records
// (" PTR "); ==> Pointer Records
// (" SOA "); ==> Start Of Authority Records
// (" SRV "); ==> Service Records
//("TXT"); ==> Text Records

//dns module

import dns from "dns";

dns.lookup("facebook.com", (error, address, family) => {
  if (error) throw error;
  console.log(address);
  console.log(family);
});

// dns.resolve("geekyshows.com", (error, records) => {
//     if (error) throw error;
//     console.log(records);

//   });
