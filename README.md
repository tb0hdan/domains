[Domains Project](https://domainsproject.org): Processing petabytes of data so you don't have to
==========

[![Domain count](https://img.shields.io/badge/domains-1.7%20billion-brightgreen)](https://github.com/tb0hdan/domains/blob/master/STATS.md)
[![GitHub stars](https://img.shields.io/github/stars/tb0hdan/domains?style=social)](https://github.com/tb0hdan/domains/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/tb0hdan/domains?style=social)](https://github.com/tb0hdan/domains/network/members)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/tb0hdan/domains)
![GitHub repo size](https://img.shields.io/github/repo-size/tb0hdan/domains)
[![GitHub issues](https://img.shields.io/github/issues/tb0hdan/domains)](https://github.com/tb0hdan/domains/issues)
[![GitHub license](https://img.shields.io/github/license/tb0hdan/domains)](https://github.com/tb0hdan/domains/blob/master/LICENSE)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/w/tb0hdan/domains)](https://github.com/tb0hdan/domains/commits/master)

# Products and services

[Phish](https://phish.domainsproject.org) is a new monitoring service for battling phishing attacks.

[LLMC](https://llmc.domainsproject.org) is a text-based URL classifier that uses [Ollama](https://ollama.com) under the hood.


# World's single largest Internet domains dataset

This public dataset contains freely available sorted list of Internet domains.


[Dataset statistics](STATS.md)

[Project news](NEWS.md)

## Support needed!

You can support this project by doing any combination of the following:

- Posting a link on your website to [DomainsProject](https://domainsproject.org)
- Opening issue and attaching other domain datasets that are not here yet (be sure to scroll through this README first)
- Publishing research work and linking to [DomainsProject](https://domainsproject.org)
- Sponsoring this project. See [Subscriptions](SUBSCRIPTIONS.md)


## Milestones:

### Domains

- [x] 10 Million
- [x] 100 Million
- [x] 1   Billion
- [x] 1.7 Billion
- [x] 2.3 Billion (Patreon only)


### (Wasted) Internet traffic:

- [x] 500TB
- [x] 925TB
- [x] 1PB
- [x] 1.3PB
- [x] 1.5PB

### Random facts:

- More than 1TB of Internet traffic is just 3 Mbytes of compressed data
- 1 million domains is just 5 Mbytes compressed
- More than 5.7PB of Internet traffic is necessary to crawl 1.7 billion domains (3.4TB / 1 million).
- Only 4.6Gb of disk space is required to store 1.7 billion domains in compressed form
- 1Gbit fully saturated link is good for about 2 million new domains every day
- 8c/16t and 64 Gbytes of RAM machine is good for about 2 million new domains every day
- 2 [ISC Bind9](https://www.isc.org/bind/) instances (>400 Mbytes RSS each) are required to get 2 million new domains every day
- After reaching 9 million domains repository was switched to compressed files.
  Please use freely available [XZ](https://tukaani.org/xz/) to unpack files.
- After reaching 30 million records, files were moved  to `/data`
  so repository doesn't have it's README at the very bottom.

# Used by

[![CloudSEK](https://raw.githubusercontent.com/tb0hdan/domains/master/logos/CloudSEK.jpg)](https://cloudsek.com)

# Using dataset
This repository empoys [Git LFS](https://git-lfs.github.com/) technology, therefore user
has to use both `git lfs` and `xz` to retrieve data. Cloning procedure is as follows:

```bash
git clone https://github.com/tb0hdan/domains.git
cd domains
git lfs install
./unpack.sh
```

## Getting unfiltered dataset

[Subscribers](SUBSCRIPTIONS.md) have access to raw data is available at [https://dataset.domainsproject.org](https://dataset.domainsproject.org)

Some other available features:
- TLD only
- Websocket for new domains
- DNS JSON (with historical data)


```bash
wget -m https://dataset.domainsproject.org
```



## Data format
After unpacking, domain lists are just text files (~49Gb at 1.7 bil) with one domain per line.
Sample for `data/afghanistan/domain2multi-af.txt`:

```
1tv.af
1tvnews.af
3rdeye.af
8am.af
aan.af
acaa.gov.af
acb.af
acbr.gov.af
acci.org.af
ach.af
acku.edu.af
acsf.af
adras.af
aeiti.af
```



# Search engines and crawlers


## Crawlers

### Domains Project bot


Domains Project uses crawler and DNS checks to get new domains.

DNS checks client is in early stages and is used by select few. It is called [Freya](https://github.com/tb0hdan/freya) and I'm working
on making it stable and good enough for general public.

HTTP crawler is being rewritten as well. It is called [Idun](https://github.com/tb0hdan/idun)


Typical user agent for Domains Project bot looks like this:

```
Mozilla/5.0 (compatible; Domains Project/1.0.8; +https://domainsproject.org)
```

Some older versions have set to Github repo:

```
Mozilla/5.0 (compatible; Domains Project/1.0.4; +https://github.com/tb0hdan/domains)
```

All data in this dataset is gathered using [Scrapy](https://scrapy.org) and [Colly](http://go-colly.org/) frameworks.

Starting with version `1.0.7` crawler has partial `robots.txt` support
and rate limiting. Please open issue if you experience any problems. Don't forget to include your domain.



### Disabling Domains Project bot access to your website

Add this to your robots.txt:

```
User-agent: domainsproject.org
Disallow:/
```

or this:

```
User-agent: Domains Project
Disallow:/
```

bot checks for both.


## Others

### Yacy

[Yacy](https://Yacy.net) is a great opensource search engine. Here's my post
on Yacy forum: [https://searchlab.eu/t/domain-list-for-easier-search-bootstrapping/231
](https://searchlab.eu/t/domain-list-for-easier-search-bootstrapping/231)


# Additional sources

[Rapid7 Sonar FDNS](https://opendata.rapid7.com/sonar.fdns_v2/) - no longer open

[List of .FR domains from AfNIC.fr](http://opendata.afnic.fr/en/products-and-services/services/opendata-en.html)

[Majestic Million](https://blog.majestic.com/development/majestic-million-csv-daily/)

[Internetstiftelsen Zone Data](https://zonedata.iis.se/)

[DNS Census 2013](https://dnscensus2013.neocities.org/)

[bigdatanews extract from Common Crawl (circa 2012)](https://www.bigdatanews.datasciencecentral.com/profiles/blogs/big-data-set-3-5-billion-web-pages-made-available-for-all-of-us)

[Common Crawl - March/April 2020](https://commoncrawl.org/2020/04/march-april-2020-crawl-archive-now-available/)

[The CAIDA UCSD IPv4 Routed /24 DNS Names Dataset - January/July 2019](http://www.caida.org/data/active/ipv4_dnsnames_dataset.xml)

[GSA Data](https://github.com/GSA/data)

[OpenPageRank 10m hosts](https://www.domcop.com/openpagerank/what-is-openpagerank)

[Switch.ch Open Data](https://www.switch.ch/open-data/)

[Slovak domains - Open Data](https://sk-nic.sk/en/home/)


# Research

This dataset can be used for research. There are papers that cover different topics.
I'm just going to leave links to them here for reference.


## Published works based on this dataset

[Understanding and Characterizing the Adoption of Internationalized Domain Names in Practice](https://ieeexplore.ieee.org/document/10496266)

[Phishing Protection SPF, DKIM, DMARC](https://www.scip.ch/en/?labs.20201008)

[Email address analysis (Czech)](https://dspace.cvut.cz/bitstream/handle/10467/95434/F8-BP-2021-Strba-Benadik-thesis.pdf?sequence=-1&isAllowed=y)

[Proteus: A Self-Designing Range Filter](https://arxiv.org/pdf/2207.01503.pdf)

[Large Scale String Analytics in Arkouda](https://davidbader.net/publication/2021-drb2/2021-drb2.pdf)

[Fake Phishing: Setup, detection, and take-down](https://jasonmurray.org/posts/2022/fakephishing/)

[Cloudy with a Chance of Cyberattacks: Dangling Resources Abuse on Cloud Platforms](https://arxiv.org/html/2403.19368v1)

[Data bouncing - thecontractor](https://thecontractor.io/data-bouncing/)

[Data bouncing - exampleone](https://databouncing.io/exampleone/)

[GlyphNet: Homoglyph domains dataset and detection using attention-based Convolutional Neural Networks](https://www.researchgate.net/publication/371729377_GlyphNet_Homoglyph_domains_dataset_and_detection_using_attention-based_Convolutional_Neural_Networks)

[Drupal and the Open Web in the Australian Government - 2022 edition](https://www.pixelite.co.nz/article/drupal-and-the-open-web-in-the-australian-government-2022/)

## Useful resources

[The Internet of Names: A DNS Big Dataset](https://conferences.sigcomm.org/sigcomm/2015/pdf/papers/p91.pdf)

[Enabling Network Security Through Active DNS Datasets](https://www.researchgate.net/publication/307872671_Enabling_Network_Security_Through_Active_DNS_Datasets)

[Analysis of the Internet Domain Names Re-registration Market](https://www.researchgate.net/publication/220307877_Analysis_of_the_Internet_Domain_Names_Re-registration_Market)

[Detection of malicious domains through lexical analysis](https://www.c-mric.com/wp-content/uploads/2018/06/Egon_Cybersecurity2018.pdf)

[Malicious Domain Names Detection Algorithm Based on Lexical Analysis and Feature Quantification](https://www.researchgate.net/publication/335742562_Malicious_Domain_Names_Detection_Algorithm_Based_on_Lexical_Analysis_and_Feature_Quantification)

[Detecting Malicious URLs Using Lexical Analysis](https://www.researchgate.net/publication/308365207_Detecting_Malicious_URLs_Using_Lexical_Analysis)
