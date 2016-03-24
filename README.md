leftpad.ninja
===============

### Highly available, distrubuted left padding service

Please note that leftpad.ninja as a company should be lowercase.

# Left pad as a service

### Installation

leftpad.ninja runs as a disbruited service. For local testing you will need to spin up 6 ubuntu 14.04 VMs, 4 Windows ME VMs, some docker stuff and I dont know maybe node or something.

First install apache zookeeper, cassandra, postgres, bonzai buddy and coffeescript.

Then git clone down the repo and run `npm i`.

Now do this for each VM. At least twice two double the distribution. Keep in mind if Mercury is in retrograde things may not work as expected.

Finally run rm index.js > /dev/null; node index.js;

Its that easy!

(c) 2025 leftpad.ninja