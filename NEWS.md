# DomainsProject.org news feed

* 10-06-2023
Improved Forward DNS A records with GeoIP2 Lite from Maxmind (so here goes attribution):

This product includes GeoLite2 data created by MaxMind, available from [https://www.maxmind.com](https://www.maxmind.com)

New sample:

```JSON
{"name":"www.aminahstore.com.","type":"a","class":"in","status":"noerror","rx_ts":1680854584888386756,"data":{"answers":[{"ttl":300,"type":"a","class":"in","name":"www.aminahstore.com.","data":"188.114.96.13","geoIP":{"Country":"NL","City":"Amsterdam"}},{"ttl":300,"type":"a","class":"in","name":"www.aminahstore.com.","data":"188.114.97.13","geoIP":{"Country":"NL","City":"Amsterdam"}}],"authorities":[{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"h.gtld-servers.net."},{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"k.gtld-servers.net."},{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"m.gtld-servers.net."},{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"d.gtld-servers.net."},{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"g.gtld-servers.net."},{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"e.gtld-servers.net."},{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"i.gtld-servers.net."},{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"j.gtld-servers.net."},{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"c.gtld-servers.net."},{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"b.gtld-servers.net."},{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"a.gtld-servers.net."},{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"f.gtld-servers.net."},{"ttl":101530,"type":"ns","class":"in","name":"com.","data":"l.gtld-servers.net."}]},"flags":["rd","ra"],"resolver":"5.172.188.121:53","proto":"udp"}
```

Note: GeoIP metadata is not available for all addresses.


* 13-04-2023
Added two more [Patreon subscriptions](https://www.patreon.com/tb0hdan):

- TLD only domains (~ 250 million)
- DNS JSON

Latter was requested on multiple occasions and is quite large (~ 500Gbytes TXT / 30 Gbytes compressed).
Contains only NOERROR records. Updated monthly.

Sample:

```JSON
{"name":"www.amimaoworld.com.","type":"a","class":"in","status":"noerror","rx_ts":1680854584881852237,"data":{"answers":[{"ttl":3600,"type":"cname","class":"in","name":"www.amimaoworld.com.","data":"amimaoworld.com."},{"ttl":3600,"type":"a","class":"in","name":"amimaoworld.com.","data":"76.223.105.230"},{"ttl":3600,"type":"a","class":"in","name":"amimaoworld.com.","data":"13.248.243.5"}],"authorities":[{"ttl":3600,"type":"ns","class":"in","name":"amimaoworld.com.","data":"ns32.domaincontrol.com."},{"ttl":3600,"type":"ns","class":"in","name":"amimaoworld.com.","data":"ns31.domaincontrol.com."}]},"flags":["rd","ra"],"resolver":"8.20.247.192:53","proto":"udp"}
```

* 19-09-2022
Added regular imports from following sources:
- france
- france-pub
- slovak
- sweden
- switzerland
- twitter


* 31-08-2022
- Regular dataset refreshes are back! Great news for [Patreon subscribers](https://www.patreon.com/tb0hdan)

* 01-08-2022
- Better late than never. Russian data is gone and will stay gone. Access to website is blocked as well. Glory to Ukraine!

* 24-06-2022
- And we're back! Crawling was resumed in limited mode. Raw dataset will be updated soon.
  Github repo updates will be delayed by at least several months.

* 03-04-2022
- Raw dataset is now available to [Patreon subscribers](https://www.patreon.com/tb0hdan) only.

* 09-03-2021
- [Freya](https://github.com/tb0hdan/freya) DNS worker has surpassed 500 billion (9.8T) processed records

* 16-03-2021
- Dataset is back to 380+ million records. ipscan utility is periodically scanning 3.7b IPv4 addresses for domain names.

* 11-02-2021
- Added new 1.2T (61 billion) records for [Freya](https://github.com/tb0hdan/freya) bringing total generated data to 11.4T / 578 billion records

* 26-01-2021
- Added new 2.8T (133 billion) records for [Freya](https://github.com/tb0hdan/freya) bringing total generated data to 10.2T / 517 billion records

* 17-01-2021
- [Freya](https://github.com/tb0hdan/freya) DNS worker has surpassed 180 (3.6T) billion processed records

* 29-12-2020
- Autovacuum tool has removed over 42 million of invalid records (DNS catchers) reducing dataset size to
  342 million records.


* 23-10-2020
- After adding some generic subdomains (.com.xx, .net.xx, etc) resulting dataset grew significantly. Machine
  ran out of disk space at 3.4T new (7.4T total) / 384 billion records.
- At least several other registrars (`.fm` is a known culprit) are doing a dirty trick for non-existent domains. Special thanks to community for catching this.
- `.la`
- `.ph`
- `.vg`
- `.ws`
- `.xn--node`
- `.xn--fiqs8s`
- `.xn--fiqz9s`

---

* 21-10-2020
- 54,081,701 new words for dataset. At least 82,312,348,922 new domains (1.6T) to check, which brings total generated dataset to pretty serious 5.6T.
- crawler code is now closed source and used internally. Most of the job is now done by [Freya](https://github.com/tb0hdan/freya)

---

* 03-10-2020
- 4.0T dataset of generated DNS names is now being processed. Return is small, about 8-10k domains per 1 million records.
- Some of those are already in the database, so 212 billion records are expected to yield about 20 million new domains.

---

* 11-09-2020
- There's a separate process, called `autovacuum`, running on a regular basis. It cleans up dataset from unreachable (expired, servfail, etc.) domains.

---

* 09-09-2020
- Added this news file :-)
