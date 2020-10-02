# DomainsProject.org news feed


* 03-10-2020
- 4.0T dataset of generated DNS names is now being processed. Return is small, about 3k domains per 1 million records.
- Some of those are already in the database, so 212 billion records are expected to yield about 100 million new domains.

* 11-09-2020
- There's a separate process, called `autovacuum`, running on a regular basis. It cleans up dataset from unreachable (expired, servfail, etc.) domains.

---

* 09-09-2020
- Added this news file :-)
