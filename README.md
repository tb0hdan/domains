Welcome to Domains Project!
==========


# Sorted list of internet domains

This dataset was created as an experiment with hopes of being useful.

[Dataset statistics](STATS.md)

- After reaching 9 million domains I've switched to archived storage.
  Please use freely available [XZ](https://tukaani.org/xz/) to unpack files.

- After reaching 30 million domains I've moved domain directories to `/data`
  so repository doesn't have it's README at the very bottom.

Milestones:
- [x] 10 Million
- [x] 20 Million
- [x] 30 Million
- [x] 50 Million
- [ ] 100 Million
- [ ] 150 Million
- [ ] 300 Million

Random facts:

- More than 1TB of Internet traffic is just 3 Mbytes of compressed data
- 1 million domains is just 5 Mbytes compressed
- More than 86TB of Internet traffic is necessary to get 50 million domains (1.73TB / 1 million).
- Only 230 Mbytes of disk space is required to store 50 million domains in a compressed form
- 1Gbit fully saturated link is good for about 5 million new domains every day
- 8c/16t and 64 Gbytes of RAM machine is good for about 2 million new domains every day
- 2 [ISC Bind9](https://www.isc.org/bind/) instances (>400 Mbytes RSS each) are required to get 2 million new domains every day

# Using dataset
This repository empoys [Git LFS](https://git-lfs.github.com/) technology, therefore user
has to use both `git lfs` and `xz` to retrieve data. Helper script `unpack.sh` is available.


# Search engines and crawlers


## Crawlers

All data in this dataset is gathered using [Scrapy](https://scrapy.org) and [Colly](http://go-colly.org/) frameworks.

Crawler code for this project is available at: [Domains Crawler](https://github.com/tb0hdan/domains-crawler)




## Yacy

[Yacy](https://Yacy.net) is a great opensource search engine. Here's my post
on Yacy forum: https://searchlab.eu/t/domain-list-for-easier-search-bootstrapping/231


# Research

This dataset can be used for research. There are papers that cover different topics.
I'm just going to leave links to them here for reference.

## Re-registration and general statistics

[Analysis of the Internet Domain Names Re-registration Market](https://www.researchgate.net/publication/220307877_Analysis_of_the_Internet_Domain_Names_Re-registration_Market)

## Lexical analysis of malicious domains.

[Detection of malicious domains through lexical analysis](https://www.c-mric.com/wp-content/uploads/2018/06/Egon_Cybersecurity2018.pdf)

[Malicious Domain Names Detection Algorithm Based on Lexical Analysis and Feature Quantification](https://www.researchgate.net/publication/335742562_Malicious_Domain_Names_Detection_Algorithm_Based_on_Lexical_Analysis_and_Feature_Quantification)

[Detecting Malicious URLs Using Lexical Analysis](https://www.researchgate.net/publication/308365207_Detecting_Malicious_URLs_Using_Lexical_Analysis)
