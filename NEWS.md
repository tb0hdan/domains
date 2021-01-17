# DomainsProject.org news feed


* 17-01-2021
- [Freya](https://github.com/tb0hdan/freya) DNS worker surpassed 180 billion processed records

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
