# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Allowed Types of change: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`

## Unreleased

### Changed
 - OPS-1289 change the npm organisation name

## 0.2.0 - 2020-04-29

### Added in 0.2.0

- added some missing `--color-on` variables

### Changed in 0.2.0

- renamed all variables to a consistent `color-[colorname]-modifier`.
  - `--dark` => `-dark`
- sorted variables consistently

### Removed in 0.2.0

- removed `--color-white-transparent` which is redundant to `--color-overlay-light`

## 0.1.9 - 2020-04-29

### Added in 0.1.9

- new `--color-overlay-light`

### Changes in 0.1.9

- renamed `--color-overlay` to `--color-overlay-dark`
