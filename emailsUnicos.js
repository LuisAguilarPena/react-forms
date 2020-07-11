// Kavak Algorithm test

// Rules: 
  // ignore "." in the local name, NOT IN THE DOMAIN
  // ignore everything after "+", only in the local name, NOT IN THE DOMAIN
// Input: an array of emails
// Output: number of unique emails that will recieve a follow up email
// EdgeCases: none provided
// Constraints: none provided

// Examples
// x.y.z+a@gmail.com -> xyz@gmail.com
// x.yz+a@gmail.com -> xy@gmail.com
// x.yz+a@gm.ail.com -> xy@gm.ail.com

/* 
NOTES:
  I iterate twice over the array making it quadratic time, so for big input arrays it will take sometime, 
  a better approach most likely is to place each element in a hashtable and then check for its presence instantly, 
  thus giving us linear time.
*/

var emailsUnicos = function(emails) {
  const uniques = [];
  
  emails.forEach(email => {
    let local = '';
    let domain = '';
    
    local = email.split('@')[0]
    domain = email.split('@')[1]

    local = local.substring(0, local.indexOf('+'));
    local = local.replace(/\./g, '');    

    if(!uniques.includes(`${local}@${domain}`)) {
      uniques.push(`${local}@${domain}`);
    }
  
  });
  
  console.log(`Existen ${uniques.length} direcciones diferentes`);
  
  return uniques.length;
};

emailsUnicos(['test.email+alex@kavak.com', 'test.e.mail+bob.cathy@kavak.com', 'testemail+david@ka.vak.com']); // -> 2 --> testemail@kavak.com & testemail@ka.vak.com

// const uniqueEmails = emails => {
//   // create structure container, array
//   const uniques = [];
//   // iterate over array
//   emails.forEach(email => {
//     // separate local name from domain name and store in container
//     let local = '';
//     let domain = '';
//     local = email.split('@')[0]
//     domain = email.split('@')[1]
//     // clean local name
//     local = local.substring(0, local.indexOf('+')); // ignore verything after +
//     local = local.replace(/\./g, ''); // get rid of dots    
//     // concat cleaned local name and domain name and push into uniques container if not present already
//     if(!uniques.includes(`${local}@${domain}`)) {
//       uniques.push(`${local}@${domain}`);
//     }
//   });
  
//   console.log(`Existen ${uniques.length} direcciones diferentes`);
  
//   // return length of container of unique emails
//   return uniques.length;
// }
// uniqueEmails(['test.email+alex@kavak.com', 'test.e.mail+bob.cathy@kavak.com', 'testemail+david@ka.vak.com']); // -> 2 --> testemail@kavak.com & testemail@ka.vak.com