import { decode } from "bs58";

let sk = decode(
  "5Q6xqTGmtJsR2WysB3ZumqQzLtr7oHhcDYQMQjdWDqRNS444ZSKpFMpqug9NM5p15nf3UMhciEq4CAD2JJghZ8zC"
);

console.log(`secret key is: ${sk}`);
