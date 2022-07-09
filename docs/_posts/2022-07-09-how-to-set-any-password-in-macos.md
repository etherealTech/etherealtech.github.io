---
layout: blog
title: How to set any password in macOS
category: [macos]
tags: [macos,command]
---

# How to set any password in macOS

Optionally, learn a bit of the regular expression language - regex (this may take a while) and you can use the one crafted below
for a 4 character length password. Here’s how to retrieve the configuration, edit that file, and then load it into the system:

1. `pwpolicy getaccountpolicies | awk 'NR>1' > ~/Desktop/file.plist`
2. `nano ~/Desktop/file.plist` or `vi ~/Desktop/file.plist`
3. Change the quoted part to your Regex.<br>`policyAttributePassword matches '^$|.{4,}+'`
4. `sudo pwpolicy setaccountpolicies ~/Desktop/file.plist`
5. passwd

## Presets

1. `^$|.{1,}+` : Any password. (Not the best Regex, but I didn't want to mess around with it too much.)

## Sources

- [Modify pwpolicy in Sierra](https://apple.stackexchange.com/questions/293820/modify-pwpolicy-in-sierra)
